const {Router} = require('express')
const {login, createUser} = require('../controllers/auth.controller')
const router = Router()

// /api/auth/admin/login
router.post('/admin/login', login)

// /api/auth/admin/create
router.post('/admin/create', createUser)

module.exports = router
