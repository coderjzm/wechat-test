<template>
  <view class="index-container">
    <swiper :indicator-dots="indicatorDots"
            :autoplay="autoplay" :interval="interval" :duration="duration">
      <block v-for="(item,index) in imgUrls" :key="index">
        <swiper-item>
          <image :src="item" class="slide-image" width="355" height="150"/>
        </swiper-item>
      </block>
    </swiper>
    <button @click="changeIndicatorDots"> indicator-dots </button>
    <button @click="changeAutoplay"> autoplay </button>
    <slider @click="intervalChange" show-value min="500" max="2000"/>
    <slider @click="durationChange" show-value min="1000" max="10000"/>
  </view>
</template>

<script>
import store from '@/store'
export default {
  data () {
    return {
      imgUrls: [
        'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
        'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
      ],
      indicatorDots: false,
      autoplay: false,
      interval: 5000,
      duration: 1000
    }
  },
  computed: {
    userInfo () {
      return store.state.user.userInfo
    }
  },
  methods: {
    bindGetUserInfo (event) {
      store.commit('user/setUserInfo', event.mp.detail.userInfo)
    },
    changeIndicatorDots (e) {
      this.indicatorDots = !this.indicatorDots
      wx.switchTab({
        url: '/pages/index/main'
      })
    },
    changeAutoplay (e) {
      this.autoplay = !this.autoplay
    },
    intervalChange (e) {
      this.interval = e.detail.value
    },
    durationChange (e) {
      this.duration = e.detail.value
    }
  }
}
</script>

<style scoped lang="scss">
.index-container {
  width: 750rpx;
  min-height: 100vh;
}
.swiper-item{
  display: block;
  height: 150px;
}
.page-section-title{
  margin-top: 60rpx;
  position: relative;
}
.info{
  position: absolute;
  right: 0;
  color: #353535;
  font-size: 30rpx;
}
.page-foot{
  margin-top: 50rpx;
}
</style>
