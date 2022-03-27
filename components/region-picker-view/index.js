// components/region-picker-view/index.js
const address = require('./city.js')

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    // 地址选择器省市区 暂存 currentIndex
    value: [0, 0, 0],
    // 一级地址
    provinces: [],
    // 二级地址
    citys: [],
    // 三级地址
    areas: [],
    visible: false,
    // 地址选择器省市区 最终 currentIndex
    regionValue: [0, 0, 0],
    region: '', // 所在地区
  },

  lifetimes: {
    // 在组件实例进入页面节点树时执行
    attached() {
      // 默认联动显示北京
      const id = address.provinces[0].id
      this.setData({
        provinces: address.provinces, // 34省
        citys: address.citys[id], // 默认北京市辖区
        areas: address.areas[address.citys[id][0].id]
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 关闭弹框
    closePopUp() {
      this.setData({
        visible: false
      })
    },
    // 打开弹框
    pickAddress() {
      this.setData({
        visible: true,
        value: [...this.data.regionValue]
      })
    },

    // 处理省市县联动逻辑 并保存 value
    cityChange(e) {
      const value = e.detail.value
      console.log(value)
      const {
        provinces,
        citys
      } = this.data
      const provinceNum = value[0]
      const cityNum = value[1]
      const areaNum = value[2]

      if (this.data.value[0] !== provinceNum) {
        // 省份id
        const id = provinces[provinceNum].id
        this.setData({
          value: [provinceNum, 0, 0],
          citys: address.citys[id],
          areas: address.areas[address.citys[id][0].id]
        })
      } else if (this.data.value[1] !== cityNum) {
        this.setData({
          value: [provinceNum, cityNum, 0],
          areas: address.areas[citys[cityNum].id]
        })
      } else {
        this.setData({
          value: [provinceNum, cityNum, areaNum]
        })
      }
    },

    // 点击地区选择取消按钮
    cityCancel() {
      const id = address.provinces[0].id
      this.setData({
        citys: this.data.lastCitys || address.citys[id], // 默认北京市辖区
        areas: this.data.lastAreas || address.areas[address.citys[id][0].id],
        value: [...this.data.regionValue],
        visible: false
      })
    },

    // 点击地区选择确定按钮
    citySure() {
      const value = this.data.value
      this.setData({
        visible: false
      })
      // 将选择的城市信息显示到输入框
      let region = ""
      try {
        region = (this.data.provinces[value[0]].name || '') + (this.data.citys[value[1]].name || '')
        if (this.data.areas.length > 0) {
          region = region + this.data.areas[value[2]].name || ''
        } else {
          this.data.value[2] = 0
        }
      } catch (error) {
        console.log('adress select something error')
      }

      this.setData({
        region,
        lastCitys: this.data.citys,
        lastAreas: this.data.areas,
        regionValue: [...this.data.value]
      }, () => {
        this.triggerEvent('change', {
          value: {
            region,
            province: {
              id: this.getRegionId('provinceId'),
              name: this.data.provinces[value[0]].name
            },
            town: {
              id: this.getRegionId('townId'),
              name: this.data.citys[value[1]].name
            },
            area: {
              id: this.getRegionId('areas'),
              name: this.data.areas[value[2]].name
            }
          }
        })
      })
    },

    // 提交时由序号获取省市区id
    getRegionId(type) {
      const value = this.data.regionValue
      const provinceId = address.provinces[value[0]].id
      const townId = address.citys[provinceId][value[1]].id
      let areaId = ''
      if (address.areas[townId][value[2]].id) {
        areaId = address.areas[townId][value[2]].id
      } else {
        areaId = 0
      }

      if (type === 'provinceId') {
        return provinceId
      } else if (type === 'townId') {
        return townId
      } else {
        return areaId
      }
    },
  }
})