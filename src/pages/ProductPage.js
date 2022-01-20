import React from "react"
import {useSearchParams} from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { useProduct } from "../context/hooks";

const ProductsView = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const product = useProduct(searchParams.get("per"))
    
    return product ? (
        <Box>
            <Grid container >
                <Grid item xs={12}><Typography variant="h6">ID: <Typography component="span" color="primary" variant="h6" style={{fontWeight: "bold"}}>{product.id}</Typography></Typography></Grid>
                <Grid item xs={12}><Typography variant="h6">Name: <Typography component="span" color="primary" variant="h6" style={{fontWeight: "bold"}}>{product.name}</Typography></Typography></Grid>
                <Grid item xs={12}><Typography variant="h6">Description: <Typography component="span" color="primary" variant="h6" style={{fontWeight: "bold"}}>{product.desc}</Typography></Typography></Grid>
                <Grid item xs={12}><Typography variant="h6">Price: <Typography component="span" color="primary" variant="h6" style={{fontWeight: "bold"}}>{product.price} €</Typography></Typography></Grid>
                <Grid item xs={12}><Typography variant="h6">Stock: <Typography component="span" color="primary" variant="h6" style={{fontWeight: "bold"}}>{product.stock}</Typography></Typography></Grid>
                <Grid item xs={12}><Typography variant="h6">Category: <Typography component="span" color="primary" variant="h6" style={{fontWeight: "bold"}}>{product.category}</Typography></Typography></Grid>
            </Grid>
        </Box>
    ) : (<></>)
}

export default ProductsView