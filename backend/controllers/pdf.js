const fs = require('fs-extra');
const path = require('path')
const html = path.join(__dirname, "../", 'pdf/')
const puppeteer = require('puppeteer')
const hbs = require('handlebars')
const moment = require('moment-timezone')
const fss = require('fs')
const Receipt = require('../models/receipt')
const errorHandler = require('../utils/error')
const numOf = require('../models/numOf')

const compile = async function (templateName, data) {
  const filePath = path.join(__dirname, '../', 'templates/', `${templateName}.hbs`)
  const htmlFile = await fs.readFile(filePath, 'utf-8')
  return hbs.compile(htmlFile)(data)
}


hbs.registerHelper('todayDate', function () {
  moment.tz('Asia/hebron')
  return moment(new Date()).format('DD/MM/YYYY')
})

hbs.registerHelper('maam', function (value, percent) {
  const res = value * percent / 100
  return numberWithCommas(res)
})

hbs.registerHelper('numberWithCommas', function (value) {
  return numberWithCommas(value)
})

hbs.registerHelper('changePayment', function (value) {
  const newValue = value == 'credit' ? 'כרטיס אשראי' : 'מזומן'
  return newValue
})

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


const getPrice = async (products) => {
  let newPrice = 0
  for (let i = 0; i < products.length; i++) {
    newPrice += + products[i].price
  }
  return newPrice
}


exports.getReceipt = async (req, res, next) => {

  if (req.body.products == null || req.body.products.length == 0)
    return res.status(402).json({
      message: 'no products found'
    })

  const price = await getPrice(req.body.products)

  const receipt = {
    fullName: req.body.fullName,
    idNumber: req.body.idNumber,
    phoneNumber: req.body.phoneNumber,
    address: req.body.address,
    products: req.body.products,
    price: price,
    notes: req.body.notes
  }


  const receiptsNum = await numOf.findOneAndUpdate({ name: 'Receipts' }, { $inc: { 'value': 1 } })
  const id = receiptsNum.value
  receipt.id = id

  console.log('my id ', receipt);


  const name = (new Date()).getTime() + '.pdf'
  const stram = fss.createReadStream(await getPdf(receipt, name))
  await stram.pipe(res)


  const storeReceipt = new Receipt({
    ...receipt,
    fileName: name,
    id: id
  })

  await storeReceipt.save()

}



const getPdf = async (receipt, name) => {
  const fileName = html + name
  const content = await compile('recipt', receipt)

  const browser = await puppeteer.launch({
    headless: false,
    args: ["--no-sandbox"],
    ignoreDefaultArgs: ['--disable-extensions'],
    executablePath: '/usr/bin/chromium-browser'
  });
  const page = await browser.newPage();
  await page.setContent(content)
  await page.pdf({
    path: fileName,
    format: 'A4',
    printBackground: true
  })

  await browser.close();
  return fileName
}


