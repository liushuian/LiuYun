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
  background-color: green;
  border-bottom: 1px solid #ccc;
}
</style>