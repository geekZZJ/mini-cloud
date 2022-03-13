// pages/progress/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    percentValue: 80
  },

  drawProgress() {
    if (this.data.percentValue >= 100) {
      this.setData({
        percentValue: 0
      })
    }
    this.setData({
      percentValue: this.data.percentValue + 10
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

  }
})