import React from 'react';
import { Typography } from '@material-ui/core';

import styles from './NotFound.module.css';

const NotFound = () => {

    return (
        <div className={styles.container}>
            <Typography variant="h1" color="secondary" style={{ textAlign: 'center' }}>
                ERROR 404
                <br />
                PAGE NOT FOUND
            </Typography>
        </div>
    );
};

export default NotFound;
