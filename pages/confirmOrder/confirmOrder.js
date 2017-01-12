Page({
  data: {
    orderList: [{
    }],
    buyAmount: 1
  },
  add: function () {
  	this.setData({
        buyAmount:++this.data.buyAmount
    })
  },
  minus: function () {
  	if(this.data.buyAmount===1){
		wx.showToast({
		  title: '购买数量不能小于1',
		  duration: 2000
		})
  	}else{
  		this.setData({
        	buyAmount:--this.data.buyAmount
   		})
  	}
  },
  inputAmount: function (e) {
  	this.setData({
        buyAmount: e.detail.value
    })
  },
  pay: function (e) {
  },
  onLoad: function () {
  }
})
