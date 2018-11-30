//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

  },
  regiest:function(){
    wx.navigateTo({
      url: '../regiest/regiest',
    })
  },
  main: function () {
    wx.navigateTo({
      url: '../main/main',
    })
  },
  onLoad: function () {
   
  },

})
