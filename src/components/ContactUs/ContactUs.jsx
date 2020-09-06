import React from 'react';
import { Grid, Typography, TextField, Button } from '@material-ui/core';

import styles from './ContactUs.module.css';

const ContactUs = () => {
    return (
        <div>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                className={styles.container}
            >
                <Grid item xs={10} md={10}>
                    <Typography
                        variant="h3"
                        color="primary"
                        className={styles.Maintitle}
                    >
                        Contact Us
                    </Typography>
                </Grid>

                <Grid item xs={10} md={5} className={styles.grid}>
                    <Grid container className={styles.boxes}>
                        <TextField
                            id="outlined-full-width"
                            required
                            label="Name"
                            style={{ margin: 8 }}
                            placeholder="Enter your name"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            color="secondary"
                        />

                        <TextField
                            id="outlined-full-width"
                            required
                            label="Email"
                            style={{ margin: 8 }}
                            placeholder="Enter your email"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            color="secondary"
                        />

                        <TextField
                            id="outlined-multiline-static"
                            required
                            label="Message"
                            multiline
                            rows={6}
                            fullWidth
                            defaultValue="Enter your message here"
                            variant="outlined"
                        />
                    </Grid>
                </Grid>

                <Grid item xs={10} md={10} className={styles.grid}>
                    <Button 
                        variant="contained" 
                        color="secondary"
                        onClick={() => alert('Functionality to be added later')}
                    >
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default ContactUs;
