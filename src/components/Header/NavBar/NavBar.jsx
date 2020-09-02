import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button
} from '@material-ui/core';

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


export default function NavBar({ navNames }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Shoes Inc.
                    </Typography>
                    {navNames.map((navName, index) => (
                        <Button key={index} color="inherit" className={styles.button}>{navName}</Button>
                    ))}
                </Toolbar>
            </AppBar>
        </div>
    );
}
