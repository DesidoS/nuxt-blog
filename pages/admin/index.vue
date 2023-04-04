<template>
  <div>
    <h1>Post analytics</h1>
    <app-analytics-chart
      title="Views"
      :labels="views.labels"
      :data="views.data"
    />

    <app-analytics-chart
      title="Comments"
      :labels="comments.labels"
      :data="comments.data"
    />
  </div>
</template>

<script>
import AppAnalyticsChart from '@/components/admin/AnalyticsChart'
export default {
  components: { AppAnalyticsChart },
  layout: 'admin',
  middleware: ['admin-auth'],
  async asyncData({ store }) {
    const { views, comments } = await store.dispatch('post/getAnalytics')
    return { views, comments }
  },
  head: {
    title: `Analytics | ${process.env.appName}`,
  },
}
</script>
