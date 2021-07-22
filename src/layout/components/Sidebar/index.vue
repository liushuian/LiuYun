<template>
  <div class="sidebar">
    <h1>流云后台管理系统</h1>
    <el-menu
      text-color="#BFCBD9"
      active-text-color="#1890FF"
      :unique-opened="true"
      default-active="/index"
      router
    >
      <el-menu-item index="/index">首页</el-menu-item>
      <el-submenu
        :index="index+''"
        v-for="(it,index) in asideList"
        :key="it.id"
      >
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{it.title}}</span>
        </template>
        <el-menu-item
          :index="item.path"
          v-for="item in it.children"
          :key="item.id"
        >{{item.title}}</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
import { asidebar } from '@/app/layout.js'
export default {
  name: 'Sidebar',
  data() {
    return {
      asideList: []
    }
  },
  created() {
    this.getAside()
  },
  methods: {
    getAside() {
      asidebar().then(res => {
        console.log(res, '---');
        this.asideList = res.data.aside
      })
    }
  },
}
</script>
<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  height: 100%;
  h1 {
    height: 60px;
    line-height: 60px;
    text-align: center;
    color: #fff;
  }
  .el-menu {
    flex: 1;
    overflow: auto;
  }
  .el-menu::-webkit-scrollbar {
    display: none;
  }
}
.el-menu {
  background-color: rgb(48, 65, 86);
  border: none;
  > li:hover {
    background-color: #2d3d51;
  }
  /deep/ {
    .el-submenu__title:hover {
      background-color: #2d3d51;
    }
    .el-menu-item.is-active {
      background-color: rgb(48, 65, 86);
    }
    .el-menu-item {
      background-color: rgb(48, 65, 86);
    }
    .el-menu-item:hover {
      background-color: #2d3d51;
    }
  }
}
</style>