import React from 'react';
import clsx from 'clsx';
import { Grid, Typography, Button } from '@material-ui/core';

import styles from './OurProducts.module.css';

import { shoe4Png, shoe5Png, shoe6Png } from '../../images';


const OurProducts = () => {
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
					className={styles.sectionTitle}
				>
					Our Products
                </Grid>

				<Grid item xs={10} md={10} >
					<div className={clsx(styles.product, styles.shoeRed, styles.spacing)}>
						<img src={shoe4Png} alt="Shoe 4" className={styles.productImage} />
						<Typography variant='h3' className={styles.productTitle}>A really nice shoe</Typography>
						<Typography variant='body2' className={styles.productDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quam
						perspiciatis facilis beatae laudantium quidem enim sit sequi!
                        </Typography>
						<Button className={styles.btn}>Buy Now</Button>
					</div>
				</Grid>
				<Grid item xs={10} md={10} >
					<div className={clsx(styles.product, styles.shoeWhite, styles.shoeLeft, styles.spacing)}>
						<img src={shoe5Png} alt="Shoe 5" className={styles.productImage} />
						<Typography variant='h3' className={styles.productTitle}>A really nice shoe</Typography>
						<Typography variant='body2' className={styles.productDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quam
						perspiciatis facilis beatae laudantium quidem enim sit sequi!
                        </Typography>
						<Button className={styles.btn}>Buy Now</Button>
					</div>
				</Grid>
				<Grid item xs={10} md={10} >
					<div className={clsx(styles.product, styles.shoeBlue, styles.spacing)}>
						<img src={shoe6Png} alt="Shoe 6" className={styles.productImage} />
						<Typography variant='h3' className={styles.productTitle}>A really nice shoe</Typography>
						<Typography variant='body2' className={styles.productDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quam
						perspiciatis facilis beatae laudantium quidem enim sit sequi!
                        </Typography>
						<Button className={styles.btn}>Buy Now</Button>
					</div>
				</Grid>

                <Grid item xs={10} md={10} >
                    <Button variant="contained" color="secondary" className={styles.productBtn}>
                        All Products
                    </Button>
                </Grid>
			</Grid>
		</div>
	);
};

export default OurProducts;
