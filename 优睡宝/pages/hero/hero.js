// pages/hero/hero.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sort:false,
    title: [{ id: 1, tex: '已邀请' }, { id: 2, tex: '我的订单' },],
    ti:2,

    title1: [{ id: 1, tex: '全部订单' }, { id: 2, tex: '待确认' }, { id: 3, tex: '已完成' }, { id: 4, tex: '待取消' },],
    ti1:1,
    show_id:1,
  },
  // 订单详情
  order_detail: function (e) {
    wx.navigateTo({
      url: '../order_detail/order_detail?id=' + e.currentTarget.id,
    })
  },
  // 申请退货
  return_goods: function () {
    wx.navigateTo({
      url: '../return_goods/return_goods',
    })
  },
  // 切换邀请和订单
  title:function(e){
    this.setData({
      ti: e.currentTarget.id
    })
  },
  title1: function (e) {
    this.setData({
      ti1: e.currentTarget.id
    })
  },
  free_sheet:function(e){
    wx.navigateTo({
      url: '../free_sheet/free_sheet',
    })
  },
  // 查看物流
  see_wl:function(e){
    this.setData({
      show:e.currentTarget.id,
      sort: true,
    })
  },
  // 申请帮助
  help:function(e){
    this.setData({
      show: e.currentTarget.id,
      sort: true,
    })
    // wx.navigateTo({
    //   url: '../help/help',
    // })
  },
  // 关闭弹窗
  bindSorttap: function () {
    this.setData({
      sort: false,
    })
  },
  // 切换模式
  show:function(e){
    console.log(e.currentTarget.id)
    this.setData({
      show_id: e.currentTarget.id
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      // console.log(options)
      // if(options.id==1){
      //   this.setData({
      //     sort: true,
      //   })
        
      // }
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