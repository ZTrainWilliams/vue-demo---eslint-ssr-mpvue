<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="child-view"/>
    </transition>
  </div>
</template>

<script>
import './assets/font/iconfont.css'
import './assets/font/iconfont.js'
import ajax from './utils/ajax.js'
export default {
  name: 'App',
  data () {
    return {
      transitionName: 'slide-left'
    }
  },
  created () {
    let that = this
    this.$navigation.on('forward', (to, from) => {
      this.transitionName = 'slide-left'
    })
    this.$navigation.on('back', (to, from) => {
      this.transitionName = 'slide-right'
    })
    ajax.call(this, '/com_Ajax', {}, (res) => {
      that.$store.commit('getNav', res)
    })
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style lang="less">
@import url('./assets/css/base.css');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
  color:#272727;
  overflow:hidden;
}
@media screen and (max-width: 750px) {
    body {
      font-size: 75px;
    }
}
.child-view {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: all .5s cubic-bezier(.55,0,.1,1);
  display: flex;
  flex-direction:column;
  overflow:hidden;
}
#main{
  flex:1;
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}
</style>
