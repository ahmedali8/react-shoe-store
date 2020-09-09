import React from 'react';
import clsx from 'clsx';
import { Grid, Typography, Button } from '@material-ui/core';

import styles from './NewArrivals.module.css';


const NewArrivals = () => {
	return (
		<div>
			<Grid
				container
				direction="column"
				justify="center"
				alignItems="center"
			>
				<Grid
					item
					xs={12} md={12}
					component={Typography}
                    variant='h2'
                    color="primary"
					className={styles.sectionTitle}
				>
					New Arrivals
                </Grid>

				<Grid item xs={10} md={10} >
					<div className={clsx(styles.product, styles.shoeRed, styles.spacing)}>
						<img src={'/assets/images/shoe-4.png'} alt="Shoe 4" className={styles.productImage} />
						<Typography variant='h3' className={styles.productTitle}>A really nice shoe</Typography>
						<Typography variant='body2' className={styles.productDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quam
						perspiciatis facilis beatae laudantium quidem enim sit sequi!
                        </Typography>
						<Button className={styles.btn} onClick={() => (alert('functionality to be added later'))}>Buy Now</Button>
					</div>
				</Grid>
				<Grid item xs={10} md={10} >
					<div className={clsx(styles.product, styles.shoeWhite, styles.shoeLeft, styles.spacing)}>
						<img src={'/assets/images/shoe-5.png'} alt="Shoe 5" className={styles.productImage} />
						<Typography variant='h3' className={styles.productTitle}>A really nice shoe</Typography>
						<Typography variant='body2' className={styles.productDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quam
						perspiciatis facilis beatae laudantium quidem enim sit sequi!
                        </Typography>
						<Button className={styles.btn} onClick={() => (alert('functionality to be added later'))}>Buy Now</Button>
					</div>
				</Grid>
				<Grid item xs={10} md={10} >
					<div className={clsx(styles.product, styles.shoeBlue, styles.spacing)}>
						<img src={'/assets/images/shoe-6.png'} alt="Shoe 6" className={styles.productImage} />
						<Typography variant='h3' className={styles.productTitle}>A really nice shoe</Typography>
						<Typography variant='body2' className={styles.productDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quam
						perspiciatis facilis beatae laudantium quidem enim sit sequi!
                        </Typography>
						<Button className={styles.btn} onClick={() => (alert('functionality to be added later'))}>Buy Now</Button>
					</div>
				</Grid>
			</Grid>
            
		</div>
	);
};

export default NewArrivals;
