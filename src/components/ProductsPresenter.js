import React, {useCallback} from "react"
import { useProducts } from "../context/hooks";
import { useNavigate } from "react-router-dom";


const ProductsPresenter = ({Component}) => {
    const products = useProducts()
    const navigate = useNavigate()

    const goToProduct = useCallback((id) => {
        navigate(`/product?per=${id}`);
    },[navigate]);
    
    return (
        <Component products={products} goToProduct={goToProduct}/>
    )
}

export default ProductsPresenter