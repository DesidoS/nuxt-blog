<template>
  <el-form
    ref="form"
    :model="controls"
    :rules="rules"
    @submit.native.prevent="onSubmit"
  >
    <h2>Create user</h2>

    <el-form-item label="Login" prop="login">
      <el-input v-model.trim="controls.login" />
    </el-form-item>

    <div class="mb2">
      <el-form-item label="Password" prop="password">
        <el-input v-model.trim="controls.password" type="password" />
      </el-form-item>
    </div>

    <el-form-item>
      <el-button type="primary" native-type="submit" round :loading="loading">
        Create
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['admin-auth'],
  data() {
    return {
      loading: false,
      controls: {
        login: '',
        password: '',
      },
      rules: {
        login: [{ required: true, message: 'Enter login', trigger: 'blur' }],
        password: [
          { required: true, message: 'Enter password', trigger: 'blur' },
          {
            min: 6,
            message: 'Password must be at least 6 characters',
            trigger: 'blur',
          },
        ],
      },
    }
  },
  head: {
    title: `Create user | ${process.env.appName}`,
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          this.loading = true

          try {
            const formData = {
              login: this.controls.login,
              password: this.controls.password,
            }

            await this.$store.dispatch('auth/createUser', formData)
            this.$message.success('New user added')
            this.controls.login = ''
            this.controls.password = ''
            this.loading = false
          } catch (e) {
            this.loading = false
          }
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
form {
  width: 600px;
}
</style>
