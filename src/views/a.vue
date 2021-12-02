<template>
  <el-row class="a" :getter="20">
    <el-col :span="8" style="margin-top: 20px;">
      <el-card shadow="hover">
        <div class="user">
          <img src="../assets/ayk.jpg"/>
          <div class="userinfo">
            <p class="name">Ayk</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间:</p><span>2021-11-18</span>
          <p>上次登录地点:</p><span>萍乡</span>
        </div>
      </el-card>
      <el-card style="height: 470px; margin-top: 20px;">
        <el-table :data="tableData">
           <el-table-column show-overflow-tooltip
            v-for="(val,key) in tableLabel"
            :key="key" :prop="key" :label="val"></el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-rol  :span="16" >
      <div class="num" style="margin-top: 20px;">
        <el-card   shadow="hover" v-for="item in countData" :key="item.name" :body-style="{ display:'flex',padding:0 }">
          <i style="margin-top: 25px;" class="icon" :class="`el-icon-${item.icon}`" :style="{ background: item.color }"></i>
          <div class="detail">
            <p class="num" style="text-align: center;">￥{{ item.value }}</p>
            <p class="txt" style="text-align: center;">{{ item.name }}</p>
          </div>
        </el-card>
      </div>
      <el-card shadow="hover" style="height: 280px;" ref="echart"></el-card>
      <div class="graph">
        <el-card shadow="hover" style="height: 260px;"></el-card>
        <el-card shadow="hover" style="height: 260px;"></el-card>
      </div>
    </el-rol>
  </el-row>
</template>

<script>
  import { getHome } from "../api/data.js"
  import * as echarts from "echarts";
  export default {
    data(){
      return{
        tableData: [
          {
          name:"oppo",
          todayBuy:100,
          montBuy:366,
          totalBuy:865,
          },
          {
          name:"vivo",
          todayBuy:100,
          montBuy:273,
          totalBuy:368,
          },
          {
          name:"ipone",
          todayBuy:100,
          montBuy:485,
          totalBuy:692,
          },
          {
          name:"miui",
          todayBuy:100,
          montBuy:385,
          totalBuy:882,
          },
          {
          name:"三星",
          todayBuy:100,
          montBuy:391,
          totalBuy:228,
          },
          {
          name:"魅族",
          todayBuy:100,
          montBuy:323,
          totalBuy:858,
          },
          {
          name:"华为",
          todayBuy:100,
          montBuy:323,
          totalBuy:858,
          },
          {
          name:"荣耀",
          todayBuy:100,
          montBuy:323,
          totalBuy:858,
          },
        ],
        tableLabel:{
          name:"课程",
          totalBuy:"今日购买",
          montBuy:"本月购买",
          totalBuy:"总购买",
        },
        countData: [
          {
            name:"今日支付订单",
            value:235,
            icon:"success",
            color:"#2ec7c9"
          },
          {
            name:"今日收藏订单",
            value:277,
            icon:"star-on",
            color:"#ffb980"
          },
          {
            name:"今日未支付订单",
            value:135,
            icon:"s-goods",
            color:"#5ab1ef"
          },
          {
            name:"本月支付订单",
            value:967,
            icon:"success",
            color:"#2ec7c9"
          },
          {
            name:"本月收藏订单",
            value:777,
            icon:"star-on",
            color:"#ffb980"
          },
          {
            name:"本月未支付订单",
            value:492,
            icon:"s-goods",
            color:"#5ab1ef"
          },
        ]
      };
    },
    methods:{
      getTableData(){
        getHome().then((res) => {
          this.tableData = res.data.tableData;
        });
      },
    },
    mounted(){
      this.getTableData();
    },
  //   mounted(){
  //     this.$http.get('/user?ID=12345')
  // .then(function (response) {
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });
    // },
  };
</script>

<style lang="scss" scoped>
 @import "../assets/scss/a.scss";
</style>
