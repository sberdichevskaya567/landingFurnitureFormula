const {Schema, model} = require('mongoose')

const ProductSchema = new Schema({
    name: {type: String, require: true},
    description: {type: String},
    picture: {type: String, require: true}
})

module.exports = model('Product', ProductSchema, 'product')

