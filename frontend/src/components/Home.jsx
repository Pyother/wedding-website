import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Container, Grid, Divider } from '@mui/material';
import { Skeleton } from '@material-ui/lab';
import Countdown from 'react-countdown';
import background from './images/background.png';

function ImageWithPlaceholder({ src }) {
    const [isLoading, setIsLoading] = React.useState(true);

    return (
        <div data-testid="image-with-placeholder" style={{ position: "relative", width: "100%", height: "100%"}}>
            <img src={src} style={{ objectFit: 'cover', objectPosition: 'top', display: isLoading ? "none" : "block", width: "100%", height: "70vh" }} onLoad={() => setIsLoading(false)} />
            { isLoading && (
                <Skeleton variant="rect" width="100%" height="100%" animation="pulse" style={{ position: "absolute", top: 0, left: 0 }} />
            )}
        </div>
    );
}

function Counter() {
    const [timerDays, setTimerDays] = useState('00'); 
    const [timerHours, setTimerHours] = useState('00'); 
    const [timerMinutes, setTimerMinutes] = useState('00'); 
    const [timerSeconds, setTimerSeconds] = useState('00');
    
    let interval = useRef();

    const startTimer = () => {
        const weddingDate = new Date('May 13, 2023 14:00:00').getTime();
        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = weddingDate - now;
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
            if(distance < 0) {
                clearInterval(interval.current);
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000);
    }

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        };
    });

    return (
        <div style={{justifyContent: "center", alignItems: "center", padding: "3%"}}>
            <Grid container className="counter">
                <Grid item xs={3} md={3} className="counter-cell">
                    <p style={{fontWeight: "bold"}}><h1>{timerDays}</h1></p>
                    <p>Dni</p>
                </Grid>
                <Grid item xs={3} md={3} className="counter-cell">
                    <p style={{fontWeight: "bold"}}><h1>{timerHours}</h1></p>
                    <p>Godzin</p>
                </Grid>
                <Grid item xs={3} md={3} className="counter-cell">
                    <p style={{fontWeight: "bold"}}><h1>{timerMinutes}</h1></p>
                    <p>Minut</p>
                </Grid>
                <Grid item xs={3} md={3} className="counter-cell">
                    <p style={{fontWeight: "bold"}}><h1>{timerSeconds}</h1></p>
                    <p>Sekund</p>
                </Grid>
            </Grid>
        </div>
    );   
}

function FadeOutSubtitle() {
    const [padding, setPadding] = useState(5);
  
    useEffect(() => {
      let targetPadding = 1;
  
      const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const maxScrollPos = document.body.clientHeight - window.innerHeight;
        const scrollPercentage = currentScrollPos / maxScrollPos;
        const newPaddingValue = (1 - scrollPercentage) * 5;
        setPadding(newPaddingValue > targetPadding ? newPaddingValue : targetPadding);
      };
      
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    return (
      <div className="header" style={{position: "sticky", zIndex: "1", top: "0", backgroundColor: "white", paddingTop: `${padding}%`, paddingBottom: `${padding}%`}}>
        <Container>
            <h1>Kasia & Damian</h1>
            <h2 style={{padding: "0", margin: "0"}}>Serdecznie zapraszamy na Nasze wesele!</h2>
        </Container>
      </div>
    );
}

const Home = () => {

    return (
        <div>
            <FadeOutSubtitle />
            <Grid container className="info-container" style={{backgroundColor: "white", color: "black"}}>
                <Grid item xs={12} md={8} style={{padding: "5%", paddingTop: "0%"}}>
                    <h2 style={{margin: "0"}}>Odliczanie</h2>
                    <Counter/>
                </Grid>
            </Grid>
            <Grid container className="content">
                    <Grid item xs={12} md={6} className="content-left">
                        <ImageWithPlaceholder src={background} />
                    </Grid>
                    <Grid data-testid="content-right" item xs={12} md={6} className="content-right">
                        <h2 style={{justifyContent: "left", alignItems: "left", padding: "0", paddingLeft: "5%"}}>Jak się poznaliśmy?</h2>
                        <p style={{textAlign: "left"}}>Nasza historia zaczęła się pewnego majowego popołudnia w 2016 roku, gdy oboje podróżowaliśmy tramwajem numer 50 który tego dnia postanowił się niespodziewanie zatrzymać. Przysiadając się obok Damiana, nigdy bym nie przypuszczała, jak ta historia może potoczyć się dalej i że doprowadzi nas do dzisiejszego punktu na osi czasu. Gdy postój na przystanku poprzedzającym nasz desant przeciągał się na kolejne minuty a ja zdenerwowana wyciągnęłam słuchawki z uszu, obcy pasażer obok zagadał: „Chyba musimy wysiąść, bo zdaje się, że ten tramwaj na razie nie ruszy. Dokąd zmierzasz?”. </p>
                    </Grid>
            </Grid >
            <Grid container className="info-container" style={{paddingBottom: "5%", backgroundColor: "white", color: "black"}}>
                <Grid item xs={12} md={8}>
                    <h2>Informacje o Weselu</h2>
                    <p>13.05.2023, godz.14:00</p>
                    <p>Parafia pw. Św. Franciszka Salezego i św. Andrzeja Boboli w Gorzycach </p>
                    <p>Po weselu zapraszamy na przyjęcie weselne, które odbędzie się w Dworze Dwikozy przy ul. Spółdzielczej 12 w Dwikozach. </p>
                </Grid>
                <Grid item xs={12} md={8}>
                    <h2>Jak do nas dotrzeć?</h2> 
                    <iframe data-testid="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4794.657451332664!2d21.781786569486854!3d50.73779075078343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4722b670fcc66eeb%3A0x23a4ce0291aa1b21!2sDw%C3%B3r%20Dwikozy%20Hotel%20Sandomierz!5e1!3m2!1spl!2spl!4v1677711265730!5m2!1spl!2spl" style={{width: "100%", height: "50vh", border: "0"}} loading="lazy"></iframe>                   
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