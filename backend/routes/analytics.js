const router = require('express').Router()
const analyticsControler = require('../controllers/analytics_service')

router.get('', (req, res) => {
 analyticsControler.getAnalytics().then(result => {
    res.json({
      result
    })
  })

})


module.exports = router
