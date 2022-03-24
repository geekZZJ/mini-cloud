// pages/scroll/index.js
let viewId = 5

Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollIntoViewId: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  onScroll(e) {
    // console.log(e.detail.scrollTop, e.detail.scrollLeft, e.detail.scrollHeight, e.detail.scrollWidth)
  },

  scrollToView1() {
    viewId += 2
    this.setData({
      scrollIntoViewId: 'childview' + viewId
    })
    console.log(this.data.scrollIntoViewId)
  },

  viewScrollToUpperEvent(e) {
    console.log('测试scrolltoupper事件', e.detail);
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

  }
})