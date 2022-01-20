import React from "react"
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });

const Product = (props) => {

    const classes = useStyles();
    
    return (
        <Card className={classes.root} style={{margin: "auto"}}>
            <CardActionArea onClick={() => props.goToProduct(props.product.id)}>
                <img src="./product.png" alt="product" style={{height: '10em', paddingTop: 10}}/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.product.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.product.desc}
                    </Typography>
                </CardContent>
                <Grid container direction="row" justifyContent="space-between" alignItems="flex-end" style={{paddingLeft: 10, paddingRight: 10, marginBottom: 2}}>
                    <Grid item>
                        <Typography variant="subtitle2">
                            PER.{props.product.id} 
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography color="primary" variant="h5">
                            {props.product.price} €
                        </Typography>
                    </Grid>
                </Grid>
            </CardActionArea>
        </Card>
    )
}

export default Product