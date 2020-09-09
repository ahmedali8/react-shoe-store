import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';

import { Grid, Typography, Card, CardMedia, Fab, Button } from '@material-ui/core';

import { GlobalContext } from '../../context/GlobalState';

import styles from './ProductDetails.module.css';


const ProductDetails = () => {

    const { productId } = useParams();

    const { products, addCart } = useContext(GlobalContext);

    // get the selected product by filtering out
    const product = products.filter((product) => (
        product._productId === productId
    ));


    if (!product) {
        return <NotFound />
    }

    return (
        <div>
            {
                product.map(({ _productId, name, price, img, colors }) => (
                    <Grid
                        container
                        justify="space-evenly"
                        alignItems="center"
                        className={styles.container}
                        key={_productId}
                    >
                        <Grid item xs={10} md={12}>
                            <Typography
                                variant="h3"
                                color="primary"
                                className={styles.Maintitle}
                            >
                                Products Details
                            </Typography>
                        </Grid>

                        <Grid item component={Card} xs={10} md={5}>
                            <CardMedia
                                component="img"
                                alt={name}
                                height="350"
                                image={img}
                                title={name}
                            />
                        </Grid>

                        <Grid item xs={10} md={5}>
                            <Grid
                                container
                                direction="column"
                                justify="center"
                                alignItems="flex-start"
                                className={styles.grid}
                            >
                                <Typography variant="h3" color="secondary" className={styles.name}>
                                    {name}
                                </Typography>
                                <Typography variant="h4" className={styles.price}>
                                    ${price}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                </Typography>
                                <Typography variant="h6" display="block">
                                    Colors :
                                </Typography>

                                <div className={styles.colors}>
                                    {
                                        colors.map((color, index) => (
                                            <Fab size="small" style={{ backgroundColor: color }} key={index}>
                                                {' '}
                                            </Fab>
                                        ))
                                    }
                                </div>

                                <Button
                                    size="medium"
                                    color="primary"
                                    variant="contained"
                                    className={styles.btn}
                                    onClick={() => addCart(productId)}
                                >
                                    Add to Cart
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                ))
            }
        </div>
    );
};

export default ProductDetails;
