<template>
  <el-container>
    <el-aside width="250px">
      <sidebar></sidebar>
    </el-aside>
    <el-container>
      <el-header>
        <navbar></navbar>
      </el-header>
      <el-main>
        <app-main></app-main>
      </el-main>
      <el-footer>
        <div>© 2021 LiuYun Copyrigh</div>
      </el-footer>
    </el-container>
  </el-container>
</template>
<script>
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar/index.vue'
import AppMain from './components/AppMain.vue'
export default {
  name: 'Layout',
  components: {
    Navbar,
    AppMain,
    Sidebar
  },
  data() {
    return {

    }
  },
  created() {

  },
  methods: {

  },
}
</script>
<style lang="scss" scoped>
.el-container {
  height: 100%;
}
.el-aside {
  background-color: rgb(48, 65, 86);
  overflow: hidden;
}
.el-header {
  background-color: #3c8dbc;
  border-bottom: 1px solid #ccc;
  color: #fff;
}
.el-main {
  background-color: #f3f3f4;
  padding-bottom: 50px;
}
.el-footer {
  font-size: 13px;
  border-top: 1px solid #e7eaec;
  padding: 10px 20px;
  > div {
    display: inline-block;
    float: right;
  }
}
</style>