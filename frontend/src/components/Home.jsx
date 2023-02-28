import React from 'react';
import { Container, Grid } from '@mui/material';

const Home = () => {
    return (
        <div>
            <Container className="header">
                <h1>Kasia & Damian</h1>
                <Grid container className="subtitle">
                    <p style={{padding: "0", fontWeight: "100"}}>Serdecznie zapraszamy na uroczystość Zaślubin! </p>
                </Grid>
            </Container>
            
            <Grid container>
                <Grid item xs={12} md={6} className="content-left">
                    <p></p>
                </Grid>
                <Grid item xs={12} md={6} className="content-right">
                    <h2>Header </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    
                </Grid>
            </Grid >

            <Container className="footer">

            </Container>
        </div>
    )
}

export default Home;