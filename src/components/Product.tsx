import React from "react"
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
import { IProduct, goToProductType} from "../types/types";


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
});

interface IProductProps {
    goToProduct: goToProductType;
    product: IProduct;
}

const Product: React.FC<IProductProps> = ({goToProduct, product}) => {

    const classes = useStyles();
    
    return (
        <Card className={classes.root} style={{margin: "auto"}}>
            <CardActionArea onClick={() => goToProduct(product.id)}>
                <img src="./product.png" alt="product" style={{height: '10em', paddingTop: 10}}/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {product.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {product.desc}
                    </Typography>
                </CardContent>
                <Grid container direction="row" justifyContent="space-between" alignItems="flex-end" style={{paddingLeft: 10, paddingRight: 10, marginBottom: 2}}>
                    <Grid item>
                        <Typography variant="subtitle2">
                            PER.{product.id} 
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography color="primary" variant="h5">
                            {product.price} €
                        </Typography>
                    </Grid>
                </Grid>
            </CardActionArea>
        </Card>
    )
}

export default Product