<template>
  <view class="index-container">
    <view class="user-info">
      <image :src="userInfo.avatarUrl"></image>
      <p>{{userInfo.nickName}}</p>
    </view>
    <button open-type="getUserInfo" @getuserinfo="bindGetUserInfo" size="default">登录</button>
  </view>
</template>

<script>
import store from '@/store'
export default {
  data () {
    return {
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
    }
  }
}
</script>

<style scoped lang="scss">
.index-container {
  width: 750rpx;
  min-height: 100vh;
  .user-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 700rpx;
    image {
      width: 200rpx;
      height: 200rpx;
      border-radius: 50%;
    }
    p {
      margin-top: 40rpx;
      font-size: 30rpx;
      text-align: center;
    }
  }
  button {
    margin: 0 auto;
    width: 200rpx;
  }
}
</style>
