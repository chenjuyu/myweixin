Page({
  takePhoto() {
    var pages=getCurrentPages();
    var currpage = pages[pages.length-1]
    var prepage=pages[pages.length-2]
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath
         
        })
        prepage.setData({
        tempImagePath : res.tempImagePath
        })
      //  console.log("上一个页面的：" + prepage.tempImagePath)
        wx.navigateBack()
      }
    })
  },
  error(e) {
    console.log(e.detail)
  }
})