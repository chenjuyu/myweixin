//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    returndata:'', //用于接收页面的返回值，在其他页面使用，本页接收值
    userInfo: {},
    username:'',
    password:'',
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (options) {
 

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  showTopTips:function(e){
    console.log("提交事件")
    console.log(e)
    wx.navigateTo({
      url:'../goodsdetail/index', //'../leftSwiperDel/index?id=1',
      success:function (){}        //成功后的回调；
      ,fail:function(){}          //失败后的回调；
      ,complete:function(){}      //结束后的回调(成功，失败都会执行)
    })

  }
  ,inputb:function(e){
    console.log(JSON.stringify(e))
    console.log("idid:" + e.currentTarget.id)
   // console.log(e.detail.value)
    if (e.currentTarget.id=='username'){
      console.log('用户名')
    }
    if (e.currentTarget.id=='password'){
      console.log('密码了')
    }

  }
})
