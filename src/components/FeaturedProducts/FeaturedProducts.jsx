import React from 'react';
import clsx from 'clsx';
import { Grid, Typography } from '@material-ui/core';

import styles from './FeaturedProducts.module.css';
import image1 from '../../images/shoe-4.png';
import image2 from '../../images/shoe-5.png';
import image3 from '../../images/shoe-6.png';


const FeaturedProducts = () => {
    return (
        <div >
            <Grid 
                container 
                direction="row"
                justify="center"
                alignItems="center"
                className={styles.featured}
            >
                <Grid
                    item
                    xs={12} md={12}
                    component={Typography}
                    variant='h2'
                    className={styles.sectionTitle}
                >
                    Featured Products
                </Grid>

                <Grid item xs={12} md={3} className={styles.featuredItems}>
                    <img src={image1} alt='shoe1' className={styles.featuredImages} />
                    <Typography variant="body1" className={styles.featuredDetails}>
                        <span>$99</span>
                        shoe name
                    </Typography>
                </Grid>
                <Grid item xs={12} md={3} className={styles.featuredItems}>
                    <img src={image2} alt='shoe2' className={clsx(styles.featuredImages, styles.blackShoe)} />
                    <Typography variant="body1" className={styles.featuredDetails} >
                        <span>$99</span>
                        shoe name
                    </Typography>
                </Grid>
                <Grid item xs={12} md={3} className={styles.featuredItems}>
                    <img src={image3} alt='shoe3' className={styles.featuredImages} />
                    <Typography variant="body1" className={styles.featuredDetails}>
                        <span>$99</span>
                        shoe name
                    </Typography>
                </Grid>

            </Grid>
        </div>
    );
};

export default FeaturedProducts;
