<template>
  <el-container>
    <el-header>
      <!-- Logo -->
      <div class="logo">
        <img src="../assets/wzh.png" alt="" />
      </div>
      <!-- 标题 -->
      <h1>比亚迪储能系统</h1>
      <!-- 退出 -->
      <div class="logout">
        <el-button type="danger" @click="handleClickOut">退出</el-button>
      </div>
    </el-header>
    <!-- 主体部分 -->
    <el-container>
      <!--侧边栏 -->
      <el-aside width="200px">
        <!-- unique-opened 是否只保持一个子菜单的展开
        router 是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转
        -->
        <el-menu
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          unique-opened
          router
          default-active="2"
        >
          <el-submenu v-for="menus in menusList" :key="menus.id" :index="menus.path">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>{{menus.authName}}</span>
            </template>
            <el-menu-item v-for="item in menus.children" :key="item.id" :index="item.path">
              <i class="el-icon-menu"></i>
              <span>{{item.authName}}</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <!-- 视图出口 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  async created () {
    const { data, meta } = await this.$axios('menus')
    if (meta.status === 200) {
      console.log(data)

      this.menusList = data
    }
  },
  data () {
    return {
      menusList: []
    }
  },
  methods: {
    // 首页退出功能
    handleClickOut () {
      this.$confirm('确定退出登录吗？', '温馨提示', {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          localStorage.removeItem('token')
          this.$router.push('/login')
          this.$message.success('退出成功')
        })
        .catch(() => {
          this.$message('取消退出')
        })
    }
  }
}
</script>

<style lang="less" scoped>
.el-container {
  height: 100%;
  .el-aside {
    background-color: #ccc;
    height: 100%;
  }
  .el-header {
    background-color: #eee;
    display: flex;
    padding: 0;
    padding-right: 20px;
    .logo {
      width: 197px;
      border-right: 3px solid orange;
      img {
        width: 100%;
        height: 100%;
      }
    }
    h1 {
      flex: 1;
      text-align: center;
    }
    .logout {
      width: 100px;
      padding-top: 10px;
      text-align: center;
    }
  }
}
</style>
