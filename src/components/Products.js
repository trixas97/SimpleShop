import React from "react"
import Product from "./Product"
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';


const Products= ({products, goToProduct}) => {
    return (
        <Box>
            <Grid container direction="row" spacing={2}  justifyContent="flex-start">
                {products.map(product => (
                    <Grid item lg={3} md={4} sm={6} xs={12} key={product.id}>
                        <Product product={product} goToProduct={goToProduct} ></Product>
                    </Grid>)
                )}
            </Grid>
        </Box>
    )
}

export default Products