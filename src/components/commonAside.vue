<template>
  <el-menu style="text-align: left;" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse"
  background-color="#545c64" text-color="#fff" active-text-color="#87cefa">
  <h3 style="text-align: center;" v-show="isCollapse">A-SOUL</h3>
  <h3 style="text-align: center;" v-show="!isCollapse">A-SOUL后台管理系统</h3>

  <el-menu-item  :index="item.path" v-for="item in onChildren" :key="item.path" @click = "clickMenu(item)" >
    <i :class="'el-icon-' + item.icon "></i>
    <span slot="title">{{ item.lable }}</span>
  </el-menu-item>

    <el-submenu :index="item.lable" v-for="item in hasChildren" :key="item.path" >

      <template slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{ item.lable }}</span>
      </template>

      <el-menu-item-group >

        <el-menu-item  :index="subItem.path" v-for="(subItem,subIndex) in item.children" :key="subIndex" @click = "clickMenu(item)" >
          <i :class="'el-icon-' + subItem.icon"></i>
          <span slot="title">{{ subItem.lable }}</span>
        </el-menu-item>

      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
  export default {
      data() {
        return {
          menu:[
            {
              path:'/',
              name:'home',
              lable:'首页',
              icon:'s-home',
              url:'Home/Home'
            },
            {
              path:'/mall',
              name:'mall',
              lable:'商品管理',
              icon:'video-play',
              url:'MallManage/MallManage'
            },
            {
              path:'/user',
              name:'user',
              lable:'用户管理',
              icon:'user',
              url:'UserManage/UserManage'
            },
            {
              lable:'其他',
              icon:'location',
              children:[
                {
                  path:'/page1',
                  name:'page1',
                  lable:'页面1',
                  icon:'setting',
                  url:'Other/PageOne'
                },
                {
                  path:'/page2',
                  name:'page2',
                  lable:'页面2',
                  icon:'setting',
                  url:'Other/PageTwo'
                }
              ]
            }
          ]
        };
      },
      methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        },
        clickMenu(item){
          this.$router.push({ name: item.name  });
        },
      },
      computed:{
        onChildren(){
          return this.menu.filter((item) => !item.children);
        },
        hasChildren(){
          return this.menu.filter((item) => item.children);
        },
        isCollapse(){
          return this.$store.state.tab.isCollapse;
        },
      },
    };
</script>

<style>
   .el-menu-vertical-demo:not(.el-menu--collapse) {

      width: 200px;
      min-height: 400px;
      height: 100vh;
    }
</style>
