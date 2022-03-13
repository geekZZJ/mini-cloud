// components/circle-progress/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    percent: {
      type: Number,
      value: 0,
      observer: function (newVal, oldVal) {
        console.log(1111, newVal, oldVal)
        this.draw(newVal, oldVal);
      }
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 动画执行时间
    animTime: 500
  },

  ready() {
    // if (this.data.percent) this.draw(this.data.percent);
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 绘制圆形进度条方法
    run(c, w, h) {
      const num = (2 * Math.PI / 100 * c) - 0.5 * Math.PI;
      // 半径用线条宽度除以2
      this.ctx2.arc(w, h, w-(16/2), -0.5 * Math.PI, num)
      // 绿色
      this.ctx2.setStrokeStyle("#09bb07");
      this.ctx2.setLineWidth("16");
      this.ctx2.setLineCap("butt");
      this.ctx2.stroke();

      this.ctx2.beginPath();
      this.ctx2.setFontSize(40);
      // 浅灰色字体
      this.ctx2.setFillStyle("#b2b2b2");
      this.ctx2.setTextAlign("center");
      this.ctx2.setTextBaseline("middle");
      this.ctx2.fillText(c + "%", w, h);
      this.ctx2.draw();
    },

    // 动画效果实现
    canvasTap(start, end, time, w, h) {
      start++;
      if (start > end) {
        return;
      }
      this.run(start, w, h);

      this.runTimerid = setTimeout(() => {
        this.canvasTap(start, end, time, w, h);
      }, time);
    },

    draw(newVal, oldVal) {
      if (newVal > 100) return
      if (!this.ctx2) {
        this.ctx2 = wx.createCanvasContext("runCanvas", this)
      }
      const time = this.data.animTime / (newVal - oldVal);
      const query = this.createSelectorQuery();
      query.select('#runCanvas').boundingClientRect((res) => {
        const w = parseInt(res.width / 2);
        const h = parseInt(res.height / 2);
        if (this.runTimerid) clearTimeout(this.runTimerid)
        this.canvasTap(oldVal, newVal, time, w, h)
      }).exec()
    }
  }
})