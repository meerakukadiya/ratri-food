const express = require('express');
const router = express();
const userAuth = require('../middleware/auth');

const weekDaysController = require('../controller/admin/weekDaysController');
router.post('/create-week-days',userAuth.userAuth,weekDaysController.createWeekDays)
router.post('/get-week-days',userAuth.userAuth,weekDaysController.getWeekDays)


module.exports = router;