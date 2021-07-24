<template>
  <div class="navbar">
    <div
      @click="onLogout"
      class="logout"
    >
      退出
    </div>
  </div>
</template>
<script>
import { removeToken } from '@/utils/auth'
export default {
  name: 'Navbar',
  data() {
    return {

    }
  },
  methods: {
    onLogout() {
      removeToken()
      this.$router.push('/login')
    }
  },
}
</script>
<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 100%;
  position: relative;
  .logout {
    cursor: pointer;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>