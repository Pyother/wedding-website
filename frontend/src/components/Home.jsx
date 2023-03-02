import React from 'react';
import { Container, Grid, Button, Box } from '@mui/material';
import { Skeleton } from '@material-ui/lab';
import background from './images/background.png';

function ImageWithPlaceholder({ src }) {
    const [isLoading, setIsLoading] = React.useState(true);

    return (
        <div style={{ position: "relative", width: "100%", height: "100%"}}>
            <img src={src} style={{ objectFit: 'cover', objectPosition: 'top', display: isLoading ? "none" : "block", width: "100%", height: "70vh" }}onLoad={() => setIsLoading(false)} />
            { isLoading && (
                <Skeleton variant="rect" width="100%" height="100%" animation="pulse" style={{ position: "absolute", top: 0, left: 0 }} />
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
                    <ImageWithPlaceholder src={background} />
                </Grid>
                <Grid item xs={12} md={6} className="content-right">
                    <h2 style={{justifyContent: "left", alignItems: "left", padding: "0", paddingLeft: "5%"}}>Nagłówek </h2>
                    <p style={{textAlign: "left"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Grid>
            </Grid >
            <Grid container className="info-container" style={{paddingBottom: "5%"}}>
                <Grid item xs={12} md={8}>
                    <h2>Informacje o Weselu</h2>
                    <p>13.05.2023, godz.14:00</p>
                    <p>Parafia pw. Św. Franciszka Salezego i św. Andrzeja Boboli w Gorzycach </p>
                    <p>Po weselu zapraszamy na przyjęcie weselne, które odbędzie się w Dworze Dwikozy przy ul. Spółdzielczej 12 w Dwikozach. </p>
                </Grid>
                <Grid item xs={12} md={8}>
                    <h2>Jak do nas dotrzeć?</h2> 
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4794.657451332664!2d21.781786569486854!3d50.73779075078343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4722b670fcc66eeb%3A0x23a4ce0291aa1b21!2sDw%C3%B3r%20Dwikozy%20Hotel%20Sandomierz!5e1!3m2!1spl!2spl!4v1677711265730!5m2!1spl!2spl" style={{width: "100%", height: "50vh", border: "0"}} loading="lazy"></iframe>                   
                </Grid>
                <Grid item xs={12} md={8}>
                    <h2>Księga Gości</h2>
                </Grid>
                <Grid item xs={12} md={8}>
                    <h2>Kontakt</h2>
                    <Grid container>
                        <Grid item xs={6} md={6}>
                            <p>Damian Sobol </p>
                            <p>501 202 278 </p>
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <p>Katarzyna Nowak </p>
                            <p>+48 662 743 092 </p>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Home;