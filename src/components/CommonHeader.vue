<template>
  <header>
    <div class="l-content">
      <el-button plain icon="el-icon-menu" size="mini" @click ="handleMenu"></el-button>
      <h3 style="color: #fff;"></h3>
    </div>
    <div class="r-content">
      <el-dropdown trigger="click" size="mini">
        <span class="el-dropdown-link">
          <img :src="userImg" class="user" />
        </span>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
  export default {
    data(){
      return{
        userImg: require("../assets/ayk.jpg"),
      };
    },
    methods:{
      handleMenu(){
        this.$store.commit("collapseMenu");
      }
    }
  }
</script>

<style style="scss" scoped>
  header{
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
  }
  .l-content{
    display: flex;
    align-items: center;
  }
  .el-button{
    margin-right: 20px;
  }
  .user{
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
</style>
