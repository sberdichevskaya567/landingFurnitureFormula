const ProductModel = require('../models/product-model')
class ProductService {
    async getOneProduct(id) {
        const product = await ProductModel.findOne({id})
        if (product) {
            return product
        }
        else throw new Error('Пользователь не найден')
    }

    async getAllProduct() {
        try {
            const products = await ProductModel.find({});
            return products
        } catch (error) {
            console.error('Error retrieving products:', error);
        }
    }
}
module.exports = new ProductService()