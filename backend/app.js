const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const moment = require('moment');
var geoip = require('geoip-lite');

const Request = require('./models/request')
const Customer = require('./models/customer')
const NumOf = require('./models/numOf')
const html = __dirname + '/smartPhone';
const Logs = require('./models/logs')

const repairsRoutes = require('./routes/repairs')
const customersRoutes = require('./routes/customers')
const companiesRoutes = require('./routes/companies')
const devicesRoutes = require('./routes/devices')
const requestsRoutes = require('./routes/requests')
const usersRoutes = require('./routes/users')
const citiesRoutes = require('./routes/cities')
const issuesRoutes = require('./routes/issues')
const smsRoutes = require('./routes/sms')
const analyticsRoutes = require('./routes/analytics')
const forgotPassword = require('./routes/forgotPassword')

const statisticRout = require('./routes/statistic')
const phoneAuth = require('./routes/phoneNumberAuth')

const app = express()
moment.locale('Asia/Hebron')

// local :   mongodb+srv://tarik:" + process.env.MONGO_ATLAS_PW + "@cluster0-4zqbh.gcp.mongodb.net/test?retryWrites=true&w=majority
//mongodb+srv://tarik:" + process.env.MONGO_ATLAS_PW + "@cluster0-adpdz.mongodb.net/test?retryWrites=true&w=majority
mongoose.connect("mongodb+srv://tarik:" + process.env.MONGO_ATLAS_PW + "@cluster0-adpdz.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
  .then(() => {
    console.log('connected to the DB');
  })
  .catch(err => {
    console.log('Connection to DataBase failed', err);

  })

mongoose.set('debug', true);

mongoose.set('debug', function (coll, method, query, doc, options) {
  console.log(coll, method);
});

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept , Authorization")
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE , PUT, OPTIONS")
  next()
})

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())





const nightJobs = require('./routes/nightJobs')




app.use('/api/repairs', repairsRoutes)
app.use('/api/customers', customersRoutes)
app.use('/api/companies', companiesRoutes)
app.use('/api/devices', devicesRoutes)
app.use('/api/requests', requestsRoutes)
app.use('/api/admin', usersRoutes)
app.use('/api/cities', citiesRoutes)
app.use('/api/issues', issuesRoutes)
app.use('/api/sms', smsRoutes)
app.use('/api/analytics', analyticsRoutes)
app.use('/api/statistic', statisticRout)
app.use('/api/phoneAuth', phoneAuth)
app.use('/api/forgotPassword', forgotPassword)






app.get('/', (req, res, next) => {
  let requestTime = Date.now();
  var m = moment().utcOffset(0);
  m.set({ hour: 0, minute: 0, second: 0, millisecond: 0 })

  var ip = req.headers['x-real-ip'];
  var geo = geoip.lookup(ip)

  console.log('IP ADDRESS IS ', ip, geo);


  Logs.create({
    name: 'visit',
    date: m,
    day: moment(requestTime).format("dddd"),
    hour: moment(requestTime).hour(),
    ip: ip,
    location: geo
  }).then(result => {
    NumOf.updateOne({ name: 'Visitors' }, { $inc: { 'value': 1 } }).exec()
    res.sendFile(html + '/index.html')
  })
    .catch(err => console.log(err))

})
app.use(express.static(html));

app.get('/*', (req, res, next) => {
  res.sendFile(html + '/index.html')
})





//handling errors
app.use((req, res, next) => {
  console.log('error')
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});


//handling all errors
app.use((error, req, res, next) => {
  console.log(error.message)
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  })
});





module.exports = app
