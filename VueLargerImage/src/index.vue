<template>
  <div class="vli-wrapper">
    <img :src="src" :alt="alt" :srcset="srcset" :width="width" :height="height" :title="title" @click="clickBigger">
    <div class="vli-fullscreen" v-if="open" :style="{ backgroundColor: bgColor }">
      <img ref="vliImage" :src="src" :alt="alt" :srcset="srcset" :title="title"
        :width="maxWidth" :height="maxHeight" @click="clickSmaller">
    </div>
  </div>
</template>
<script>
export default {
  inheritAttrs: false,
  name: 'VueLargerImage',
  props: {
    src: {
      type: String,
      default: 'https://i.loli.net/2021/03/29/Hcvo57YUtpGmwdq.jpg'
    },
    alt: {
      type: String,
      default: 'image'
    },
    srcset: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: "auto"
    },
    height: {
      type: String,
      default: "auto"
    },
    bgColor: {
      type: String,
      default: 'rgba(0,0,0,.45)'
    },
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      open: false,
      maxWidth: 0,
      maxHeight: 0
    }
  },
  watch: {
    open: function() {
      if (this.open) {
        this.$nextTick(() => {
          // 如果图片大于屏幕宽高，取消position: absolute定位
          if (this.maxWidth > window.screen.width || this.maxHeight > window.screen.height) {
            this.$refs.vliImage.classList.add('vli-img-reset')
          }
        })
      }
    },
    immediate: false
  },
  methods: {
    clickBigger (e) {
      e.preventDefault()
      if (e.target && e.target.nodeName.toLowerCase() === 'img') {
        this.maxWidth = e.target.naturalWidth
        this.maxHeight = e.target.naturalHeight
        // 禁止滚动
        document.body.style.overflow = 'hidden'
        this.open = !this.open
      }
    },
    clickSmaller (e) {
      e.preventDefault()
      if (e.target.nodeName.toLowerCase() === 'img') {
        document.body.style.overflow = 'auto'
        this.open = !this.open
      }
    },
  }
}
</script>
<style scoped>
  .vli-wrapper > img {
    cursor: zoom-in;
  }
  .vli-fullscreen {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.45);
    overflow: auto;
    text-align: center;
    z-index: 999999;
  }
  .vli-fullscreen img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    display: block;
    cursor: zoom-out;
  }
  img.vli-img-reset {
    position: static;
  }
</style>