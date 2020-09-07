import React from 'react';
import clsx from 'clsx';
import { Grid, Typography } from '@material-ui/core';

import styles from './FeaturedProducts.module.css';
import { shoe1Png, shoe2Png, shoe3Png } from '../../images';


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
					<img src={shoe1Png} alt='shoe1' className={styles.featuredImages} />
					<Typography variant="body1" className={styles.featuredDetails}>
						<span>$99</span>
                        shoe name
                    </Typography>
				</Grid>
				<Grid item xs={12} md={3} className={styles.featuredItems}>
					<img src={shoe2Png} alt='shoe2' className={clsx(styles.featuredImages, styles.blackShoe)} />
					<Typography variant="body1" className={styles.featuredDetails} >
						<span>$99</span>
                        shoe name
                    </Typography>
				</Grid>
				<Grid item xs={12} md={3} className={styles.featuredItems}>
					<img src={shoe3Png} alt='shoe3' className={styles.featuredImages} />
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
