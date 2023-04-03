const path = require('path')
const multer = require('multer')
// const moment = require('moment')
const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary')

// const storage = multer.diskStorage({
//   destination(req, file, cb) {
//     cb(null, path.resolve(__dirname, '../..', 'static'))
//   },
//   filename(req, file, cb) {
//     cb(null, `${moment().format('DDMMYYYY-HHmmss_SSS')}-${file.originalname}`)
//   },
// })

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET,
})

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'image',
    format: 'jpg',
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
})

module.exports = multer({
  storage,
  limits: { fileSize: 1024 * 1024 * 5 },
})
