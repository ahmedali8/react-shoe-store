import React from 'react';
import clsx from 'clsx';
import { Grid, Typography } from '@material-ui/core';

import styles from './FeaturedProducts.module.css';


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
                    color="primary"
					className={styles.sectionTitle}
				>
					Featured Products
                </Grid>

				<Grid item xs={12} md={3} className={styles.featuredItems}>
					<img src={'/assets/images/shoe-1.png'} alt='shoe1' className={styles.featuredImages} />
					<Typography variant="body1" className={styles.featuredDetails}>
						<span>$99</span>
                        shoe name
                    </Typography>
				</Grid>
				<Grid item xs={12} md={3} className={styles.featuredItems}>
					<img src={'/assets/images/shoe-2.png'} alt='shoe2' className={clsx(styles.featuredImages, styles.blackShoe)} />
					<Typography variant="body1" className={styles.featuredDetails} >
						<span>$99</span>
                        shoe name
                    </Typography>
				</Grid>
				<Grid item xs={12} md={3} className={styles.featuredItems}>
					<img src={'/assets/images/shoe-3.png'} alt='shoe3' className={styles.featuredImages} />
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
