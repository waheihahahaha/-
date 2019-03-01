
Page({

  data: {

    tableDataShow: false,

    city: '',

    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    listData: [

      // { "code": "地区", "text": {{city}} },

      // { "code": "头像", "text": "哇哈哈哈哈哈", "type": "type1" },

      // { "code": "姓名", "text": "哇哈哈哈哈哈", "type": "type1" },

      { "code": "学号", "text": "201939139", "type": "type2" },

      { "code": "年龄", "text": "15", "type": "type3" },

      { "code": "性别", "text": "男", "type": "type4" },

      { "code": "班级", "text": "高三一班", "type": "type5" },

      { "code": "电话", "text": "13882882888", "type": "type6" },

      { "code": "邮箱", "text": "13993993999@163.com", "type": "type7" },

      { "code": "籍贯", "text": "云南省昆明市", "type": "type8" }

    ]

  },

  onLoad: function () {
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo ({
            lang:"zh_CN",
            withCredentials: true,
            success: function (res) {
              console.log('re00s', res)
            }
          })
        }
      }
    })
  },
  bindGetUserInfo: function(e) {
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
