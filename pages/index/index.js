//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    products: [{
      title: '羽绒服女中长款2014冬季新外套红色L',
      images:['http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'],
      price: '￥300.00',
      commentAmount:'932',
      goodPercent:'95%'
      },
      {
      title: '羽绒服女中长款2014冬季新外套红色L',
      images:['http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'],
      price: '￥5550.00',
      commentAmount:'122',
      goodPercent:'65'
      },
      {
      title: '羽绒服女中长款2014冬季新外套红色L',
      images:['http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'],
      price: '￥300.00',
      commentAmount:'932',
      goodPercent:'95%'
      },
      {
      title: '羽绒服女中长款2014冬季新外套红色L',
      images:['http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'],
      price: '￥5550.00',
      commentAmount:'122',
      goodPercent:'65'
      }
      
    ],
    userInfo: {},
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  onPullDownRefresh: function () {
    console.log('下拉刷新中....')
    this.setData({
      'products': [{
      title: '羽绒服女中长款2014冬季新外套红色L',
      images:['http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'],
      price: '￥300.00',
      commentAmount:'932',
      goodPercent:'95%'
      },
      {
      title: '羽绒服女中长款2014冬季新外套红色L',
      images:['http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'],
      price: '￥5550.00',
      commentAmount:'122',
      goodPercent:'65'
      }]
    });
    wx.stopPullDownRefresh()
  }
})
