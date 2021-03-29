<template>
  <div id="app">
    <vue-larger-image
      width="200"
      height="auto"
      bgColor="rgb(0,0,0,.2)"
      alt="hello"
      title="world"
      src="https://img.yzcdn.cn/upload_files/2021/01/08/FotbYZAKI4w0iJOFd7LXGV6HLxJW.png">
    </vue-larger-image>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
