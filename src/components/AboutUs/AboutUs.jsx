import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import styles from './AboutUs.module.css';

const AboutUs = () => {
	return (
		<div>
			<Grid
				container
				direction="row"
				justify="center"
				className={styles.container}
			>
				<Grid item xs={10} md={12}>
					<Typography
						variant="h3"
						color="primary"
						className={styles.Maintitle}
					>
						About Us
                    </Typography>
				</Grid>

				<Grid item xs={10} md={5} className={styles.grid}>
					<Typography
						variant="body1"
                        color="secondary"
                        style={{ fontWeight: '600' }}
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non nunc ac dui ullamcorper feugiat et venenatis sapien. Fusce blandit ac velit a efficitur. Nunc suscipit aliquet augue, a pellentesque libero maximus vitae. Nulla facilisi. Suspendisse potenti. Aliquam non porttitor diam, vitae volutpat sapien. Maecenas tincidunt magna ut nisi pretium semper. Etiam vel tincidunt arcu, id tincidunt neque. Cras augue neque, tempor sit amet dapibus cursus, dictum vitae enim. Aliquam erat volutpat. Nulla in consectetur magna.
                    </Typography>
				</Grid>

				<Grid item xs={10} md={5} className={styles.grid}>
					<Typography
						variant="h5"
						color="primary"
						className={styles.title}
						gutterBottom
					>
						Our Mission:
                    </Typography>
					<Typography
						variant="body1"
                        color="secondary"
                        style={{ fontWeight: '600' }}
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non nunc ac dui ullamcorper feugiat et venenatis sapien. Fusce blandit ac velit a efficitur. Nunc suscipit aliquet augue, a pellentesque libero maximus vitae. Nulla facilisi. Suspendisse potenti. Aliquam non porttitor diam, vitae volutpat sapien. Maecenas tincidunt magna ut nisi pretium semper. Etiam vel tincidunt arcu, id tincidunt neque. Cras augue neque, tempor sit amet dapibus cursus, dictum vitae enim. Aliquam erat volutpat. Nulla in consectetur magna.
                    </Typography>
				</Grid>
			</Grid>
		</div>
	);
};

export default AboutUs;
