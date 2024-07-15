import api from "../src/data/http";

class Product {
    public async getAllProduct() {
        return api.get('product')
            .then((res)=>{
                return res.data
            })
    }
}

export const product = new Product;