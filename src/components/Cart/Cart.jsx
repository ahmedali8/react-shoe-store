import React, { useContext } from 'react';

import { Grid, Typography, Card, CardMedia, Button } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import { GlobalContext } from '../../context/GlobalState';

import styles from './Cart.module.css';


const Cart = () => {

    const { cart, increase, decrease, removeProduct } = useContext(GlobalContext);

    // console.log(cart)

    // const fake = [
    //     {
    //         _productId: "featured-product-1",
    //         name: "SHOE 1",
    //         price: 99,
    //         count: 1,
    //         img:
    //             "/assets/images/shoes/shoe-1.jpg",
    //         colors: ["orange", "black", "crimson", "teal"],
    //     }
    // ];



    if (cart.length === 0) {
        return <h2 style={{ textAlign: "center" }} className={styles.container}>Nothings Product</h2>
    }


    return (
        <div>
            <Grid
                container
                justify="center"
                alignItems="flex-start"
            >
                <Grid item xs={10} md={12}>
                    <Typography
                        variant="h3"
                        color="primary"
                        className={styles.Maintitle}
                    >
                        Cart
                    </Typography>
                </Grid>
            </Grid>

            {
                cart.map(({ _productId, name, price, count, img }) => (

                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="flex-start"
                        key={_productId}
                        className={styles.productCard}
                    >
                        <Grid item component={Card} xs={10} md={3}>
                            <CardMedia
                                component="img"
                                alt={name}
                                height="250"
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
                                <Typography variant="h5" color="secondary" className={styles.name}>
                                    {name}
                                </Typography>
                                <Typography variant="h6" className={styles.price}>
                                    ${price}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                </Typography>
                                <Grid
                                    container
                                    direction="row"
                                    justify="flex-start"
                                    className={styles.btnContainer}
                                >
                                    <Fab size="small" color="secondary" onClick={() => decrease(_productId)}>
                                        <RemoveIcon />
                                    </Fab>
                                    <Button color="secondary">{count}</Button>
                                    <Fab size="small" color="secondary" onClick={() => increase(_productId)}>
                                        <AddIcon />
                                    </Fab>
                                    <Button
                                        size="small"
                                        color="primary"
                                        variant="contained"
                                        className={styles.btn}
                                        onClick={() => removeProduct(_productId)}
                                    >
                                        Remove from Cart
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                ))
            }
        </div>
    );
};

export default Cart;
