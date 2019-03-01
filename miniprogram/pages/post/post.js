Page({

  data: {
    tableDataShow: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },

  onLoad: function () {
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            lang: "zh_CN",
            withCredentials: true,
            success: function (res) {
              console.log('re00s', res)
            }
          })
        }
      }
    })
  },
  bindGetUserInfo: function (e) {
    // this.city = e.detail.userInfo.city + '-' + e.detail.userInfo.province +'-'+ e.detail.userInfo.country
    // console.log('dd', this.city)
    if (e.detail.userInfo) {
      console.log('确认成功')
    } else {
      console.log('拒绝访问')
    }
    var sex
    if (e.detail.userInfo.gender === 1) {
      sex = '男'
    } else if (e.detail.userInfo.gender === 2) {
      sex = '女'
    } else {
      sex = '未设置性别'
    }
    this.setData({
      tableDataShow: true,
      canIUse: false,
      city: e.detail.userInfo.city,
      province: e.detail.userInfo.province,
      country: e.detail.userInfo.country,
      sex: sex
    })
  }
})