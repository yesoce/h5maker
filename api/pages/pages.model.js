/**
 * Created by zhengguorong on 16/11/4.
 */
const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

var PageSchema = new mongoose.Schema({
  pages: {
    type: Array,
    required: true
  },
  title: String,
  description: String,
  wechatAccount: String,
  html: String,
  createDate: { type: Number, default: new Date().getTime() },
  loginId: String,
  type: {
    type: String, required: true, default: 'page', enum: ['h5', 'spa', 'page'] // 页面是单页还是多页
  },
  canvasHeight: Number
})

module.exports = mongoose.model('Page', PageSchema)
