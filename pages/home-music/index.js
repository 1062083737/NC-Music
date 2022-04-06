// pages/home-music/index.js
import { getBanners } from '../../service/api_music'
import queryRect from '../../utils/query-rect'
import throttle from '../../utils/throttle'
const throttleQueryRect = throttle(queryRect, 1000)
Page({

  data: {
    banners: [],
    swiperHeight: 0
  },

  onLoad: function (options) {
    this.getPageData()
  },
  getPageData: function() {
    getBanners().then(res => {
      console.log(res);
      this.setData({banners: res.banners})
    })
  },
  handleSwiperImageLoaded: function() {
    throttleQueryRect('.swiper-image').then(res => {
      const rect = res[0]
      this.setData({ swiperHeight: rect.height })
    })
  },
  handleSearchClick: function() {
    wx.navigateTo({
      url: '/pages/detail-search/index',
    })
  }
})