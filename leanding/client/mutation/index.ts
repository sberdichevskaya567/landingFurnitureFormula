import {product} from "../service";
import {useQuery} from "@tanstack/react-query";

const useGetAllProduct = () => {
    const callback = async () => {
     return product.getAllProduct()
    }

    return useQuery({
        queryKey: ['getAllProduct'],
        queryFn: callback
    })
}

export {useGetAllProduct}