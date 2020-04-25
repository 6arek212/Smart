const RequestLog = require('../models/logs');

module.exports = {
  getAnalytics() {
    let getTotalRequests = RequestLog.countDocuments();
    let getStatsPerRoute = RequestLog.aggregate([
      {
        $group: {
          _id: '$type',
          responseTime: { $avg: '$responseTime' },
          count: { $sum: 1 },
        }
      },
      {
        $project: {
          _id: 0,
          name: "$_id",
          value: '$count'
        }
      }
    ]);

    let getRequestsPerDay = RequestLog.aggregate([
      {
        $group: {
          _id: { type: '$type' },
          series: { $push: '$$ROOT' },
          count: { $sum: 1 }
        }
      }
    ]);

    let getRequestsPerHour = RequestLog.aggregate([
      {
        $group: {
          _id: '$hour',
          count: { $sum: 1 }
        }
      },
      { $sort: { numberOfRequests: 1 } }
    ]);

    let getAverageResponseTime = RequestLog.aggregate([
      {
        $group: {
          _id: null,
          averageResponseTime: { $avg: '$responseTime' }
        }
      }
    ]);

    return Promise.all([
      getAverageResponseTime,
      getStatsPerRoute,
      getRequestsPerDay,
      getRequestsPerHour,
      getTotalRequests
    ]).then(results => {
      return {
        averageResponseTime: results[0][0].averageResponseTime,
        statsPerRoute: results[1],
        requestsPerDay: results[2],
        requestsPerHour: results[3],
        totalRequests: results[4],
      };
    })
  }
};
