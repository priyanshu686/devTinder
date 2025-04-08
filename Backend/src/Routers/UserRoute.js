const express = require("express");
const router = express.Router();
const {userAuth} = require('../utils/Auth');
const {GetConnection , checkfriend,feed} = require('../Controller/userController');

router.get('/Connection',userAuth,GetConnection);
router.get('/Connected',userAuth,checkfriend);
router.get('/feed',userAuth,feed)

module.exports = router