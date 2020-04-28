var CronJob = require('cron').CronJob;
const PhoneVerify = require('../models/phoneNumberAuth')
const moment = require('moment')

var job = new CronJob('0 0 0 * * *', function () {
  console.log('You will see this message at midnight');

  var m = moment().utcOffset(0);
  m.subtract(7, 'days')
  m.set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
  const lastWeekDate = m._d

  console.log(lastWeekDate, 'deleting phone records ');


  PhoneVerify.deleteMany({ createdAt: { $lte: lastWeekDate } }).then(res => {
    console.log('done deleting ', res);

  })


}, null, true, 'Asia/Hebron');
job.start();
