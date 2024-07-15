import {useGetAllProduct} from "../mutation";

const useGetProduvtPresenter = () => {
    const {data} = useGetAllProduct()
    return {
        data
    }
}

export default useGetProduvtPresenter