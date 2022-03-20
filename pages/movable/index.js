// pages/movable/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
  tap(e) {
    const kind = parseInt(e.currentTarget.dataset.kind)
    if (!kind) {
      this.setData({
        x: 30,
        y: 30
      })
    } else {
      this.setData({
        x: 0,
        y: 0
      })
    }
  },
  onMovableViewChange(e){
    console.log("change",e.detail)
  }
})