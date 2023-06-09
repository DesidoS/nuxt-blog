<template>
  <el-form
    ref="form"
    :model="controls"
    :rules="rules"
    @submit.native.prevent="onSubmit"
  >
    <h1 class="mb">Create new post</h1>

    <el-form-item label="Enter post title" prop="title">
      <el-input v-model="controls.title" />
    </el-form-item>

    <el-form-item label="Text in .md format or .html" prop="text">
      <el-input
        v-model="controls.text"
        type="textarea"
        resize="none"
        :rows="10"
      />
    </el-form-item>

    <el-button class="mb" type="success" plain @click="previewDialog = true">
      Preview
    </el-button>

    <el-dialog title="Preview" :visible.sync="previewDialog">
      <div :key="controls.text">
        <vue-markdown>{{ controls.text }}</vue-markdown>
      </div>
    </el-dialog>

    <el-upload
      ref="upload"
      class="mb"
      drag
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-change="handleImageChange"
      :auto-upload="false"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">Drag the picture <em>or click</em></div>
      <div slot="tip" class="el-upload__tip">files with extension jpg/png</div>
    </el-upload>

    <el-form-item>
      <el-button type="primary" native-type="submit" round :loading="loading">
        Create post
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
      image: null,
      previewDialog: false,
      loading: false,
      controls: {
        title: '',
        text: '',
      },
      rules: {
        text: [
          {
            required: true,
            message: 'Текст не должен быть пустым',
            trigger: 'blur',
          },
        ],
        title: [
          {
            required: true,
            message: 'Название поста не может быть пустым',
            trigger: 'blur',
          },
        ],
      },
    }
  },
  head: {
    title: `Новый пост | ${process.env.appName}`,
  },
  methods: {
    handleImageChange(file, fileList) {
      this.image = file.raw
    },
    onSubmit() {
      this.$refs.form.validate(async (valid) => {
        if (valid && this.image) {
          this.loading = true

          const formData = {
            title: this.controls.title,
            text: this.controls.text,
            image: this.image,
          }

          try {
            await this.$store.dispatch('post/create', formData)
            this.controls.text = ''
            this.controls.title = ''
            this.image = null
            this.$refs.upload.clearFiles()
            this.$message.success('Пост создан')
          } catch (e) {
          } finally {
            this.loading = false
          }
        } else {
          this.$message.warning('Форма не валидна')
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
