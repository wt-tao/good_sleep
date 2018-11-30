// pages/uesr/uesr.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sort: true,
  },
  // 订单详情
  order_detail: function (e) {
    wx.navigateTo({
      url: '../order_detail/order_detail?id=' + e.currentTarget.id,
    })
  },
  // 提现记录
  withdrawals_record:function(){
    wx.navigateTo({
      url: '../withdrawals_record/withdrawals_record',
    })
  },
  // 我的收藏
  my_sc: function () {
    wx.navigateTo({
      url: '../my_sc/my_sc',
    })
  },
  // 申请提现
  banlance:function(){
    wx.navigateTo({
      url: '../banlance/banlance',
    })
  },
  // 申请退货
  return_goods: function () {
    wx.navigateTo({
      url: '../return_goods/return_goods',
    })
  },
  // 查看物流
  see_wl: function (e) {
    this.setData({
      show: e.currentTarget.id,
      sort: false,
    })
  },
// 关闭弹窗
  bindSorttap: function () {
    this.setData({
      sort: true,
    })
  },

  address:function(){
    wx.navigateTo({
      url: '../address/address',
    })
  },
  order: function () {
    wx.navigateTo({
      url: '../order/order',
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