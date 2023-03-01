import React from 'react';
import { Container, Grid, Button } from '@mui/material';
import { Skeleton } from '@material-ui/lab';

function ImageWithPlaceholder({ src }) {
    const [isLoading, setIsLoading] = React.useState(true);

    return (
        <div style={{ position: "relative", width: "100%", height: "100%"}}>
            <img src={src} style={{ display: isLoading ? "none" : "block", width: "100%", height: "100%" }}onLoad={() => setIsLoading(false)} />
            { isLoading && (
                <Skeleton variant="rounded" width="100%" height="100%" animation="pulse" style={{ position: "absolute", top: 0, left: 0 }} />
            )}
        </div>
    )
}

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
                    <ImageWithPlaceholder src="photo.png" />
                </Grid>
                <Grid item xs={12} md={6} className="content-right">
                    <h2 style={{justifyContent: "left", alignItems: "left", padding: "0", paddingLeft: "5%"}}>Nagłówek </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <Grid container className="button-container">
                        <Button style={{backgroundColor: "white", color: "#023322"}}>Kolejny element -> </Button >
                    </Grid >
                </Grid>
            </Grid >
            <Grid container className="info-container">
                <Grid item xs={12} md={8}>
                    <h2>Informacje o Weselu</h2>
                </Grid>
                <Grid item xs={12} md={8}>
                    <h2>Jak do nas dotrzeć?</h2>
                </Grid>
                <Grid item xs={12} md={8}>
                    <h2>Księga Gości</h2>
                </Grid>
                <Grid item xs={12} md={8}>
                    <h2>Kontakt</h2>
                </Grid>
            </Grid>
            

            <Container className="footer">

            </Container>
        </div>
    )
}

export default Home;