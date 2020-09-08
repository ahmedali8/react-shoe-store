import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';

import { Grid, Typography, Card, CardMedia, Fab, Button } from '@material-ui/core';

import { GlobalContext } from '../../context/GlobalState';

import styles from './ProductDetails.module.css';


const ProductDetails = () => {

    const { productId } = useParams();

    const { data } = useContext(GlobalContext);

    const shoe = data[productId];
    const { name, img, colors } = shoe;


    if (!shoe) {
        return <NotFound />
    }

    return (
        <div>
            <Grid
                container
                justify="space-evenly"
                alignItems="center"
                className={styles.container}
                key={productId}
            >
                <Grid item xs={10} md={12}>
                    <Typography
                        variant="h3"
                        color="primary"
                        className={styles.Maintitle}
                    >
                        All Products
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
                            $99
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

                        <Button size="medium" color="primary" variant="contained" className={styles.btn}>
                            Add to Cart
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default ProductDetails;
