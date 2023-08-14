const express = require("express");
const router = express.Router();

const createNoticeController = require('../../controllers/noticeController/createNoticeController')
const getAllNoticeContoller = require('../../controllers/noticeController/getAllNoticeController')
const getOneNoticeController = require('../../controllers/noticeController/getOneNoticeController')
const deleteNoticeController = require('../../controllers/noticeController/deleteOneNoticeController')
// const authenticationMidleware = require('../../middlewares/authentication/authentication')

router.post('/notices/', createNoticeController)
router.get('/notices/', getAllNoticeContoller)
router.get('/notices/:id', getOneNoticeController)
router.delete('/notices/:id', deleteNoticeController)

module.exports = router;

