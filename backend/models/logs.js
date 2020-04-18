let mongoose = require('mongoose');

let Logs = mongoose.model('logs', {
    type: {type:String,enum:['visit','new-request','new-customer']},
    responseTime: Number,
    day: String,
    hour: Number
});

module.exports = Logs;
