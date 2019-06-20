<template>
  <view class="container">
    <!--  头部滚动nav  -->
    <scroll-view class="tab" scroll-x :scroll-left="tabScroll" :scroll-with-animation="true">
      <view class="tab-item" :class="currentTabIndex === index ? 'active' : ''" v-for="(item, index) in menuList"
            :key="index" @click="changeTab(index)">
        {{item.name}}
      </view>
    </scroll-view>
    <!--  每个nav对应的内容  -->
    <swiper class="content" :current="currentTabIndex" @change="changeContent">
      <swiper-item v-for="(item,index) in menuList" :key="index" class="content-item">
        这里是{{item.name}}
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
  export default {
    data () {
      return {
        menuList: [{
          name: '快车'
        }, {
          name: '顺风车'
        }, {
          name: '外卖'
        }, {
          name: '单车'
        }, {
          name: '礼橙专车'
        }, {
          name: '出租车'
        }, {
          name: '公交'
        }, {
          name: '代驾'
        }, {
          name: '豪华车'
        }, {
          name: '自驾租车'
        }, {
          name: '拼车'
        }, {
          name: '二手车'
        }],
        tabScroll: 0,
        currentTabIndex: 0,
        windowWidth: ''
      }
    },
    created () {
      wx.getSystemInfo({
        success: res => {
          this.windowWidth = res.windowWidth
        }
      })
    },
    computed: {},
    methods: {
      // 切换tab
      changeTab (index) {
        let tabWidth = this.windowWidth / 5
        this.currentTabIndex = index
        this.tabScroll = (index - 2) * tabWidth
      },
      changeContent (e) {
        let current = e.mp.detail.current // 当前的index
        let tabWidth = this.windowWidth / 5
        this.currentTabIndex = current
        this.tabScroll = (current - 2) * tabWidth
      }
    }
  }
</script>

<style scoped lang="scss">
  .container {
    width: 100vw;

    .tab {
      width: 100%;
      height: 100 rpx;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 100;
      white-space: nowrap;
      line-height: 100 rpx;

      .tab-item {
        display: inline-block;
        width: 20%;
        text-align: center;
        font-size: 14px;
        color: #8f9193;

        &.active {
          color: #ff502c;
        }
      }
    }

    .content{
      height: 100vh;
      box-sizing: border-box;
      text-align: center;
      font-size: 14px;
    }
    .content-item{
      padding-top: 100rpx;
    }
  }
</style>
