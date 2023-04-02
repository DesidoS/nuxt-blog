export { default as AdminAnalyticsChart } from '../../../components/admin/AnalyticsChart.vue'
export { default as AdminAppAside } from '../../../components/admin/AppAside.vue'
export { default as MainAppNavigation } from '../../../components/main/App-Navigation.vue'
export { default as MainAppComment } from '../../../components/main/AppComment.vue'
export { default as MainAppPost } from '../../../components/main/AppPost.vue'
export { default as MainCommentForm } from '../../../components/main/CommentForm.vue'

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
