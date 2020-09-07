import React from 'react';
import {
	AppBar,
	Toolbar,
	Typography,
	Button
} from '@material-ui/core';

import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import styles from './NavBar.module.css';


const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));


export default function NavBar({ navData }) {
    const classes = useStyles();
    
	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar id="back-to-top-anchor">
					<Typography variant="h6" className={classes.title}>
						Shoes Inc.
                    </Typography>

                    {navData.map(({ name, link }, index) => (
                        <Link to={link} key={index} className={styles.link}>
                            <Button key={index} color="inherit" className={styles.button}>{name}</Button>
                        </Link>
					))}

				</Toolbar>
			</AppBar>
		</div>
	);
}
