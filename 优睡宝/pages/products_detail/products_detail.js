// pages/products_detail/products_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    list: [{ id: 1, text: '商品介绍' }, { id: 2, text: '规格参数' }, { id: 3, text: '商品评价' }],
    id: 1,
  },
  sec: function (e) {
    this.setData({
      id: e.currentTarget.id
    })
  },
  sure_order:function(){
    wx.navigateTo({
      url: '../sure_order/sure_order',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})