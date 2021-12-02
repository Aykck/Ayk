<template>
  <div id="app">
    <!-- <p>嘉然我真的好喜欢你啊</p>
    <el-button>嘉心糖</el-button>
    <el-button type="info">北极星</el-button>
    <br/>
      <el-radio v-model="radio" label="1">嘉然</el-radio>
      <el-radio v-model="radio" label="2">贝拉</el-radio>
      <br/>
      <router-link to="/">嘉然组件</router-link> |
      <router-link to="/about">北极星组件</router-link> -->
      <router-view />
  </div>
</template>

<script>
  export default {
    data () {
      return { // eslint-disable-line no-unused-vars
        radio: '1',
      };
    }
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
