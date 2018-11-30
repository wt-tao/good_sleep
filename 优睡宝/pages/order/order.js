// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title1: [{ id: 1, tex: '全部订单' }, { id: 2, tex: '待确认' }, { id: 3, tex: '已完成' }, { id: 4, tex: '待取消' },],
    ti1: 1,
    sort: true,
  },
  see_wl: function (e) {
    this.setData({
      show: e.currentTarget.id,
      sort: false,
    })
  },
  // 申请退货
  return_goods: function() {
    wx.navigateTo({
      url: '../return_goods/return_goods',
    })
  },

  bindSorttap: function () {
    this.setData({
      sort: true,
    })
  },
  title1: function (e) {
    this.setData({
      ti1: e.currentTarget.id
    })
  },
  order_detail:function(e){
    wx.navigateTo({
      url: '../order_detail/order_detail?id=' + e.currentTarget.id,
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