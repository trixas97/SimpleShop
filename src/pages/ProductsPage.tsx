import React from "react"
import ProductsPresenter from "../components/ProductsPresenter"
import Box from '@material-ui/core/Box';
import Products from "../components/Products";

const ProductsPages: React.FC = () => {
    return (
        <Box>
            <ProductsPresenter Component={Products}/>
        </Box>
    )
}

export default ProductsPages