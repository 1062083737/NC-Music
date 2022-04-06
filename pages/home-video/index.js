// pages/home-video/index.js
import { getTopMV } from '../../service/api_video'

Page({
  data: {
    topMVs: [],
    hasMore: true
  },
  onLoad: async function (options) {
    this.getTopMVData(0)
  },
  // 封装网络请求的方法
  getTopMVData: async function(offset) {
    if (!this.data.hasMore) return
    wx.showNavigationBarLoading() //展示标题转圈动画
    const res = await getTopMV(offset)
    let newData = this.data.topMVs
    if (offset === 0) {
      newData = res.data
    } else {
      newData = newData.concat(res.data)
    }
    this.setData({ topMVs: newData })
    this.setData({ hasMore: res.hasMore })
    wx.hideNavigationBarLoading()
    if (offset === 0) {
      wx.stopPullDownRefresh()
    }
  },
  // 封装事件处理的方法
  handleVideoItemClick: function(event) {
    console.log(event);
    // 获取id
    const id = event.currentTarget.dataset.item.id
    // 页面跳转
    wx.navigateTo({
      url: `/pages/detail-video/index?id=${id}`,
    })
  },
  // 下拉
  onPullDownRefresh: async function() {
    this.getTopMVData(0)
  },
  // 上滑
  onReachBottom: async function() {
    console.log('我到底了');
    this.getTopMVData(this.data.topMVs.length)
  }
})