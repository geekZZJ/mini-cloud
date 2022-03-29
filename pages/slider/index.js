// pages/slider/index.js
const pageData = {}
for (var i = 1; i < 5; ++i) {
  (function (index) {
    pageData[`slider${index}change`] = function (e) {
      console.log(`slider${index}发生change事件，携带值为`, e.detail.value)
    }
  })(i);
}

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  slider2change(e) {
    console.log('slider2发生change事件，携带值为', e.detail.value)
  },

  slider3change(e) {
    console.log('slider3发生change事件，携带值为', e.detail.value)
  },

  slider4change(e) {
    // console.log('slider3发生change事件，携带值为', e.detail.value)
  },

  onSliderChanging(e) {
    console.log(e.type, e.detail.value);
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

  }
})