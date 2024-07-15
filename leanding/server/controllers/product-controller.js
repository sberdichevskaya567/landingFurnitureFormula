const productServer = require('../service/product-service')

class ProductController {
    async getOneProduct(req, res, next) {
        try {
            const product = await productServer.getOneProduct("66882ecdc69d03c3f27d4f61")
            return res.json(product)
        } catch (e) {
            console.log(e)
        }
    }

    async getAllProduct(req, res, next) {
        try {
            const productAllData = await productServer.getAllProduct()
            return res.json(productAllData)
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new ProductController()