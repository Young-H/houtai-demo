<template>
  <div class="home">
    <el-form label-width="80px" class="el-form" :model="from" :rules="rules" ref="from">
      <img src="../assets/logo.png" alt="" class="img-top">
      <el-form-item label="帐号：" prop='username'>
        <el-input type="text" v-model="from.username"/>
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <el-input type="password" v-model="from.password" @keyup.enter.native="handleClickEnter" />
      </el-form-item>
      <el-form-item>
        <el-button type="success" plain @click="handleClickEnter">登录</el-button>
        <el-button type="danger" plain  @click="resetForm">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      from: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入帐号', trigger: 'blur' },
          { min: 3, max: 12, message: '长度6-12个字符', trigger: ['blur', 'change'] }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 12, message: '长度6-12个字符', trigger: ['blur', 'change'] }
        ]
      }
    }
  },
  methods: {
    // 登录
    async handleClickEnter () {
      try {
        await this.$refs.from.validate()
        const { data, meta } = await this.$axios.post('login', this.from)
        console.log(data, meta)
        if (meta.status === 400) {
          this.$message({
            message: meta.msg,
            type: 'warning'
          })
        }
        if (meta.status === 200) {
          this.$message({
            message: meta.msg,
            type: 'success'
          })
          // 保存token
          localStorage.setItem('token', data.token)
          // 跳转到首页
          this.$router.push('home')
        }
      } catch (err) {
        this.$message({
          message: '请重新输入帐号密码',
          type: 'warning'
        })
      }
    },
    // 重置
    resetForm () {
      this.$refs.from.resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
  .home {
    background-color: #eee;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .el-form {
      position: relative;
      width: 400px;
      background-color: #fff;
      padding: 50px;
      margin: 0 auto;
      margin-top: 200px;
      border-radius: 10px;
      button {
        margin-right: 80px;
      }
      .img-top {
        position: absolute;
        width: 80px;
        height: 80px;
        border-radius: 40px;
        top: -40px;
        left: 50%;
        transform: translate(-50%);
        background-color: #fff;
      }
    }
  }
</style>
