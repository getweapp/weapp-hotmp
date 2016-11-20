//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    welcome: "Get Latest News Now",
    "username": "getweapp",
    img: "https://avatars3.githubusercontent.com/u/23582121?v=3&s=460"
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../text/text'
    })
  },
  onLoad: function () {
    console.log('onLoad')
  }
})
