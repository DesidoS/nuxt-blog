export const AdminAnalyticsChart = () => import('../../../components/admin/AnalyticsChart.vue' /* webpackChunkName: "components/admin-analytics-chart" */).then(c => wrapFunctional(c.default || c))
export const AdminAppAside = () => import('../../../components/admin/AppAside.vue' /* webpackChunkName: "components/admin-app-aside" */).then(c => wrapFunctional(c.default || c))
export const MainAppNavigation = () => import('../../../components/main/App-Navigation.vue' /* webpackChunkName: "components/main-app-navigation" */).then(c => wrapFunctional(c.default || c))
export const MainAppComment = () => import('../../../components/main/AppComment.vue' /* webpackChunkName: "components/main-app-comment" */).then(c => wrapFunctional(c.default || c))
export const MainAppPost = () => import('../../../components/main/AppPost.vue' /* webpackChunkName: "components/main-app-post" */).then(c => wrapFunctional(c.default || c))
export const MainCommentForm = () => import('../../../components/main/CommentForm.vue' /* webpackChunkName: "components/main-comment-form" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
