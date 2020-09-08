import React, { useContext } from 'react';

import { GlobalContext } from '../../context/GlobalState';

import { Link, Outlet } from 'react-router-dom';

import {
    Grid,
    Typography,
    Card,
    CardContent,
    CardActionArea,
    CardMedia,
    CardActions,
    Button,
    IconButton,
    FormControlLabel,
    Checkbox
} from '@material-ui/core';

import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';

import styles from './ProductIndex.module.css';

const ProductIndex = () => {

    const { data } = useContext(GlobalContext);

    // console.log(data);

    return (
        <div>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
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

                <Grid item xs={10} md={11}>
                    <Grid
                        container
                        direction="row"
                        justify="space-around"
                        alignItems="center"
                        className={styles.grid}
                    >
                        {Object.entries(data).map(([productId, { name, img }]) => (

                            <Grid item component={Card} xs={12} sm={5} md={3} key={productId}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt={name}
                                        height="200"
                                        image={img}
                                        title={name}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {name}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Link to={productId} className={styles.link}>
                                        <Button size="small" color="primary" variant="contained">
                                            Buy Now
                                        </Button>
                                    </Link>
                                    
                                    <FormControlLabel style={{marginRight: '0'}}
                                        control={
                                            <Checkbox 
                                                icon={<FavoriteBorder />} 
                                                checkedIcon={<Favorite />} 
                                                name="checkedHeart" 
                                            />
                                        }
                                    />

                                    <IconButton aria-label="share">
                                        <ShareIcon />
                                    </IconButton>
                                </CardActions>
                            </Grid>
                        ))}

                    </Grid>
                </Grid>
            </Grid>

            <Outlet />
        </div>
    );
};

export default ProductIndex;
