const router = require('express').Router()
const Statistic = require('../models/statistic')
const NumOf = require('../models/numOf')
const statisticController = require('../controllers/statistic')
// const CronJob = require('cron').CronJob;

// const job = new CronJob({
//   // Run at 05:00 Central time, only on weekdays
//   cronTime: '* * * * * *',
//   onTick: function() {
//     const date=new Date()
//       // Run whatever you like here..
//       console.log('CronJob ran!!',date.toLocaleDateString({timeZone:'Asia/Jerusalem',},'HH:mm:ss dd/MM/yyyy'));
//   },
//   start: true,
//   timeZone: 'Asia/Jerusalem'
// });


// const schedule = require('node-schedule')

// schedule.scheduleJob('0 0 0 * * *', () => {
//   var date = new Date();
//   console.log(date.toLocaleDateString({ timezone: "Asia/Jerusalem" }))

//   date.setDate(date.getDate() + 1)
//   const day = date.getUTCDate()
//   const month = date.getUTCMonth() + 1
//   const year = date.getUTCFullYear()

//   console.log('Midnight job started day', date);

//   const st = {
//     name: day + 1 + '/' + month,
//     day: day,
//     month,
//     year
//   }

//   names = ['Requests', 'Visitors']

//   for (const name of names) {
//     Statistic.updateOne(
//       { name: name /* doc id */ },
//       { $push: { 'series': st } }
//     ).then(result => {
//       console.log('Midnight job successful');
//     })
//   }


//   // '* * * * * *' - runs every second
//   // '*/5 * * * * *' - runs every 5 seconds
//   // '10,20,30 * * * * *' - run at 10th, 20th and 30th second of every minute
//   // '0 * * * * *' - runs every minute
//   // '0 0 * * * *' - runs every hour (at 0 minutes and 0 seconds)

// }) // run everyday at midnight


router.get('/numOf', (req, res, next) => {
  NumOf.find().select('value name')
    .then(result => {
      res.status(200).json(result)
    })
})


router.get('/numOfObject', (req, res, next) => {
  NumOf.find().select('value name')
    .then(result => {
      res.status(200).json(result)
    })
})



router.get('', (req, res, next) => {
  //.select('name series')
  Statistic.find().then(docs => {
    res.status(200).json(docs)
  })
})


router.delete('', (req, res, next) => {

  // Statistic.deleteMany().then(docs => {
  //   res.status(200).json({
  //     docs
  //   })
  // })


  // Statistic.updateOne(
  //   { name: 'Visitors' /* doc id */ },
  //   { $pull: { 'series':{'_id': '5e88ff8c9cb1b055bc820f6b'} } }
  // )


  Statistic.deleteOne(
    { name: 'Visitors' /* doc id */ },
    { $pull: { 'series': { '_id': '5e88ff8c9cb1b055bc820f6b' } } }
  ).then(result => {
    res.status(201).json({
      message: '',
      result
    })
  }).catch(err => {
    res.json(err)
  })

})



router.post('/siteVisit', statisticController.onVisit)

router.put('', (req, res) => {
  var date = new Date();
  date.setDate(date.getDate() + 1)
  const day = date.getUTCDate()
  const month = date.getUTCMonth() + 1
  const year = date.getUTCFullYear()

  console.log('Midnight job started day', date);

  const st = {
    name: 5 + '/' + month,
    day: 5,
    month,
    year
  }




  names = ['Requests', 'Visitors']
  Statistic.updateOne(
    { name: 'Requests' /* doc id */ },
    { $push: { 'series': st } }
  ).then(result => {
    console.log('Midnight job successful');
    res.status(500).json(result)

  }).catch(err => {
    res.status(500).json(err)
  })

  // for (const name of names) {
  //   console.log(name);

  //   Statistic.updateOne(
  //     { name: name /* doc id */ },
  //     { $push: { 'series': st } }
  //   ).then(result => {
  //     console.log('Midnight job successful');
  //     res.status(500).json(result)

  //   }).catch(err=>{
  //     res.status(500).json(err)
  //   })
  // }
})





router.post('/sms', async (req, res, next) => {
  const from = 'SmartPhone';
  const to = '972525145565';
  const text = 'مرحبا بك في سمارت فون باقة';
  const accountSid = 'AC8a7c103d2a3bec243cda5ac32542256a';
  const authToken = '29b89183b591fd4998ca876256f60dbe';
  const client = require('twilio')(accountSid, authToken);


  client.messages
    .create({
      body: 'مرحبا بك في سمارت فون باقة',
      from: '+12029914931',
      to: '+972 52-514-5565'
    })
    .then(message => console.log(message.sid))
    .catch(err => { console.log(err); }
    )
  res.json()

})






module.exports = router

