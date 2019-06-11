<template>
  <view class="index-container">
    <view class="list-item" v-for="(item, index) in lists" :key="index">
      <p>{{item}}</p>
    </view>
  </view>
</template>

<script>
import store from '@/store'
export default {
  data () {
    return {
      lists: [
        'aaa',
        'bbb',
        'ccc',
        'aaa',
        'bbb',
        'ccc',
        'aaa',
        'bbb',
        'ccc',
        'aaa',
        'bbb',
        'ccc'
      ]
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
  .list-item{
    height: 150rpx;
  }
}
</style>
