const express = require('express')
const router = express.Router();

// Item Model
const User = require('../../Models/User')

// @route GET api/users
// @desc Get All Users
// @access public
router.get('/', (req, res) => {
    res.send('register')
})


module.exports = router;