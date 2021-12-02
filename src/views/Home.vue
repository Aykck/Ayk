<template>
  <el-container style="height: 100%;">
    <el-aside width="auto">
      <commonAside></commonAside>
    </el-aside>
    <el-container>
      <el-header>
        <common-header></common-header>
      </el-header>
      <el-main><router-view/></el-main>
    </el-container>
  </el-container>
</template>

<script>
import commonAside from '../components/commonAside.vue'
import CommonHeader from '../components/CommonHeader.vue'
export default {
  name: 'Home',
  components: { commonAside, CommonHeader },
};
</script>
<style lang="scss" scoped>
  .el-header{
    background: #7B7B7B;
    text-align: left;
  }
  .el-main{
    padding-top: 0;
  }

</style>
