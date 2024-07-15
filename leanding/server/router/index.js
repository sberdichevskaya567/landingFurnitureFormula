// файл, в котором будут описываться все роуты для отправления в бд

const Router = require('express').Router
const prosuctController = require('../controllers/product-controller')
const router = new Router()

// router.get('/product/:id', prosuctController.getOneProduct)
router.get('/product', prosuctController.getAllProduct)
module.exports = router