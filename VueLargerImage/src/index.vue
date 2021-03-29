<template>
  <div class="vli-wrapper">
    <img :src="src" :alt="alt" :srcset="srcset" :width="width" :height="height" :title="title" @click="toggleImage">
    <div class="vli-fullscreen" v-if="open" :style="{ backgroundColor: bgColor }">
      <img :src="src" :alt="alt" :srcset="srcset" :title="title" @click="toggleImage">
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
      default: 'https://static.tomluvjerry.cn/files/lhyUnited/2236da75b7fba3b3ff6380242166e9b3.jpg'
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
      default: "200"
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
      open: false
    }
  },
  methods: {
    toggleImage (e) {
      e.preventDefault()
      if (e.target.nodeName.toLowerCase() === 'img') {
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
  }
  .vli-fullscreen img {
    position: absolute;
    display: block;
    margin: auto;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    cursor: zoom-out;
    max-width: 100%;
  }
</style>