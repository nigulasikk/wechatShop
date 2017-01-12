Page({
  data: {
    product: {
      id:'1233554',
      images: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      ],
      title:'羽绒服女中长款2014冬季新外套红色L羽绒服女中长款2014冬季新外套红',
      price:'￥199.00'
    },
    swipeConfig: {
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000
    }
  },
  buy: function () {
    wx.navigateTo({
      url: '../confirmOrder/confirmOrder'
    })
  },
  onLoad: function () {
  }
})
