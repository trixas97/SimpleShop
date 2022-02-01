import React, {useCallback} from "react"
import { useProducts } from "../context/hooks";
import { useNavigate } from "react-router-dom";
import { IProduct, IComponentProps } from "../types/types";


interface IProductsPresenterProps {
    Component: React.ComponentType<IComponentProps>
}

const ProductsPresenter: React.FC<IProductsPresenterProps> = ({Component}) => {
    const products: IProduct[] = useProducts()
    const navigate = useNavigate()

    const goToProduct = useCallback((id) => {
        navigate(`/product?per=${id}`);
    },[navigate]);

    return (
        <Component products={products} goToProduct={goToProduct}/>
    )
}

export default ProductsPresenter