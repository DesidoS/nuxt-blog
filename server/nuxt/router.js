import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d309803a = () => interopDefault(import('../../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _60a1073b = () => interopDefault(import('../../pages/admin/create.vue' /* webpackChunkName: "pages/admin/create" */))
const _3a2098c6 = () => interopDefault(import('../../pages/admin/list.vue' /* webpackChunkName: "pages/admin/list" */))
const _6022e2fa = () => interopDefault(import('../../pages/admin/login.vue' /* webpackChunkName: "pages/admin/login" */))
const _1d6af66e = () => interopDefault(import('../../pages/admin/logout.vue' /* webpackChunkName: "pages/admin/logout" */))
const _fa4edf6c = () => interopDefault(import('../../pages/admin/user.vue' /* webpackChunkName: "pages/admin/user" */))
const _35349e6c = () => interopDefault(import('../../pages/admin/post/_id.vue' /* webpackChunkName: "pages/admin/post/_id" */))
const _5be2134a = () => interopDefault(import('../../pages/post/_id.vue' /* webpackChunkName: "pages/post/_id" */))
const _78c4253a = () => interopDefault(import('../../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _d309803a,
    name: "admin"
  }, {
    path: "/admin/create",
    component: _60a1073b,
    name: "admin-create"
  }, {
    path: "/admin/list",
    component: _3a2098c6,
    name: "admin-list"
  }, {
    path: "/admin/login",
    component: _6022e2fa,
    name: "admin-login"
  }, {
    path: "/admin/logout",
    component: _1d6af66e,
    name: "admin-logout"
  }, {
    path: "/admin/user",
    component: _fa4edf6c,
    name: "admin-user"
  }, {
    path: "/admin/post/:id?",
    component: _35349e6c,
    name: "admin-post-id"
  }, {
    path: "/post/:id?",
    component: _5be2134a,
    name: "post-id"
  }, {
    path: "/",
    component: _78c4253a,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
