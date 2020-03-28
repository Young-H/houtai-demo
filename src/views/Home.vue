<template>
  <el-container>
    <el-header>
      <!-- Logo -->
      <div class="logo">
        <img src="../assets/wzh.png" alt="">
      </div>
      <!-- 标题 -->
      <h1>比亚迪储能系统</h1>
      <!-- 退出 -->
      <div class="logout">
        <el-button type="danger">退出</el-button>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>导航一</span>
                </template>
                <el-submenu index="1-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
              </el-submenu>
            </el-menu>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {}
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
      text-align:center;
    }
    .logout {
      width: 100px;
      padding-top: 10px;
      text-align: center;
    }
  }
}
</style>
