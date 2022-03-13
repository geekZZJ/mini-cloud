// pages/rich-text/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nodes: [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'line-height: 20px;padding:20px;'
      },
      children: [{
        type: 'text',
        text: '中文Hello&nbsp;World!'
      }, {
        name: 'span',
        attrs: {
          style: 'color: green;'
        },
        children: [{
          type: 'text',
          text: 'message'
        }]
      }, {
        name: 'br',
      }, {
        name: 'br',
      }, {
        name: 'img',
        attrs: {
          src: 'http://zhangblog.cn:7001/public/banner/banner2.jpg',
          style: 'width:50px'
        }
      }, {
        name: 'img',
        attrs: {
          src: 'http://zhangblog.cn:7001/public/banner/banner1.jpg',
          style: 'width:100%;',
          class: 'img'
        }
      }, {
        name: 'img',
        attrs: {
          src: 'http://zhangblog.cn:7001/public/banner/banner3.jpg',
          style: 'width:100%;'
        }
      }]
    }],
    urls: [],
    tagStyle: {
      img: 'font-size:0;display:block;',
    },
    html: "<div>中文Hello World!<span>message</span><img src='http://zhangblog.cn:7001/public/banner/banner1.jpg' /><img src='http://zhangblog.cn:7001/public/banner/banner2.jpg' /><img src='http://zhangblog.cn:7001/public/banner/banner3.jpg' /></div>"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  tap(e) {
    const urls = this.data.urls
    wx.previewImage({
      current: urls[0],
      urls: urls
    })
  },

  onTapImage(e) {
    console.log('iamge url', e.detail.src)
  },

  findUrl(nodes) {
    let urls = []
    nodes.forEach(item => {
      if (item.attrs) {
        for (const key in item.attrs) {
          if (key === 'src') {
            urls.push(item.attrs[key])
          }
        }
      }
      if (item.children) {
        urls = urls.concat(this.findUrl(item.children))
      }
    })
    return urls
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    this.data.urls = this.findUrl(this.data.nodes)
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