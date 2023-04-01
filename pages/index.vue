<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="18" :md="12" :lg="10">
      <app-post v-for="post in posts" :key="post._id" :post="post" />
    </el-col>
  </el-row>
</template>

<script>
import AppPost from '@/components/main/AppPost'
export default {
  components: {
    AppPost,
  },
  async asyncData({ store }) {
    const posts = await store.dispatch('post/fetch')
    return { posts }
  },
  head: {
    title: 'Главная',
  },
}
</script>

<style></style>
