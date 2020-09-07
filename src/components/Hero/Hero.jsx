import React from 'react';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';


import styles from './Hero.module.css';

const Hero = () => {
	return (
		<div className={styles.container}>
			<Container component='div' maxWidth='md' justify='center' className={clsx(styles.hero)}>
				<Typography
					variant='h1'
					color='primary'
					align='left'
					gutterBottom
					className={clsx(styles.primaryTitle)}
				>
					Amazing shoes at an amazing price
                </Typography>
				<img src={'/assets/images/hero.png'} alt='Nike Shoe' className={styles.image} />
			</Container>
		</div>
	);
}

export default Hero;
