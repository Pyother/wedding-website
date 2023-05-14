import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Container, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import { Skeleton } from '@material-ui/lab';
import background from './images/background.png';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';

function ImageWithPlaceholder({ src }) {
    const [isLoading, setIsLoading] = React.useState(true);

    return (
        <div data-testid="image-with-placeholder" style={{ position: "relative", width: "100%", height: "100%"}}>
            <img src={src} style={{ objectFit: 'cover', objectPosition: 'top', display: isLoading ? "none" : "block", width: "100%", height: window.innerWidth >= 721 ? "70vh" : "40vh"}} onLoad={() => setIsLoading(false)} />
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
        <div style={{justifyContent: "center", alignItems: "center", padding: "1%", border: "1px solid"}}>
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
    
    /*useEffect(() => {
      let targetPadding = 2;
  
      const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const maxScrollPos = document.body.clientHeight - window.innerHeight;
        const scrollPercentage = currentScrollPos / maxScrollPos;
        const newPaddingValue = (1 - scrollPercentage) * 5;
        setPadding(newPaddingValue > targetPadding ? newPaddingValue : targetPadding);
      };
      
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);*/
  
    return (
      <div className="header" style={{position: "sticky", zIndex: "1", top: "-5em", backgroundColor: "white", paddingTop: `${padding}%`, paddingBottom: `${padding}%`}}>
        <Container>
            <h1 style={{marginBottom: "0.4em"}}>Kasia & Damian</h1>
            <Grid container>
                <Grid item xs={4} md={4} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Button style={{height: "5vh"}} href="#plan">
                        <p style={{textTransform: "none", fontFamily: 'Great Vibes', color: 'black'}}>Harmonogram</p>
                    </Button>
                </Grid>
                <Grid item xs={4} md={4} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Button style={{height: "5vh"}} href="#location">
                        <p style={{textTransform: "none", fontFamily: 'Great Vibes', color: 'black'}}>Lokalizacja</p>
                    </Button>
                </Grid>
                <Grid item xs={4} md={4} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Button style={{height: "5vh"}} href="#accomodation">
                        <p style={{textTransform: "none", fontFamily: 'Great Vibes', color: 'black'}}>Zakwaterowanie</p>
                    </Button>
                </Grid>
            </Grid>
        </Container>
      </div>
    );
}

function createData(hour, event) {
    return { hour, event };
}

const rows = [
    createData('14:00', 'Ceremonia ślubna'),
    createData('14:50', 'Pamiątkowe zdjęcia pod kościołem'),
    createData('15:15', 'Przybycie Pary Młodej na salę weselną'),
    createData('16:00', 'Uroczysty obiad'),
    createData('17:00', 'Pierwszy taniec i rozpoczęcie zabawy'),
    createData('19:00', 'Pierwsza kolacja'),
    createData('20:30', 'Tort'),
    createData('21:30', 'Podziękowania dla rodziców'),
    createData('23:00', 'Druga kolacja'),
    createData('00:00', 'Ceremonia chaosu'),
    createData('02:00', 'Trzecia kolacja')
];

function createData2(day, hour, event) {
    return { day, hour, event };
}

const rows2 = [
    createData2('sobota', '14:00', 'Od tej godziny można się meldować w hotelu'),
    createData2('niedziela', '08:00-10:00', 'Śniadanie'),
    createData2('niedziela', '11:00', 'Wymeldowanie')
]

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
                    <Grid item xs={12} md={12} className="counter-cell">
                        <CalendarMonthOutlinedIcon className="icon"/>
                        <p>13.05.2023, godz.14:00</p>
                    </Grid>
                    <Grid item xs={12} md={12} className="counter-cell" id="accomodation">
                        <PlaceOutlinedIcon className="icon"/>
                        <p>Parafia pw. Św. Franciszka Salezego i św. Andrzeja Boboli w Gorzycach</p>
                    </Grid>
                    <Grid item xs={12} md={12} className="counter-cell">
                        <HotelOutlinedIcon className="icon"/>
                        <p>Zapraszamy na portiernię po odbiór kluczy oraz informację o przydzielonym pokoju.</p>
                        <Grid container style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <Grid item xs={10} md={10}>
                                <TableContainer>
                                    <Table>
                                        <TableHead>
                                            <TableCell style={{fontWeight: "bold", fontFamily: 'EB Garamond'}}>Dzień</TableCell>
                                            <TableCell style={{fontWeight: "bold", fontFamily: 'EB Garamond'}}>Godzina</TableCell>
                                            <TableCell style={{fontWeight: "bold", fontFamily: 'EB Garamond'}}>Wydarzenie</TableCell>
                                        </TableHead>
                                        <TableBody>
                                            {rows2.map((row) => (
                                                <TableRow key={row.day}>
                                                    <TableCell style={{fontFamily: 'EB Garamond'}}>{row.day}</TableCell>
                                                    <TableCell style={{fontFamily: 'EB Garamond'}}>{row.hour}</TableCell>
                                                    <TableCell style={{fontFamily: 'EB Garamond'}}>{row.event}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={10} md={8} id="plan">
                    <h2>Szczegółowy plan Wesela</h2>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableCell style={{fontWeight: "bold", fontFamily: 'EB Garamond'}}>Godzina</TableCell>
                                <TableCell style={{fontWeight: "bold", fontFamily: 'EB Garamond'}}>Wydarzenie</TableCell>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                <TableRow key={row.hour}>
                                    <TableCell style={{fontFamily: 'EB Garamond'}}>{row.hour}</TableCell>
                                    <TableCell style={{fontFamily: 'EB Garamond'}}>{row.event}</TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item xs={10} md={8} id="location">
                    <h2>Jak do nas dotrzeć?</h2> 
                    <iframe data-testid="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4794.657451332664!2d21.781786569486854!3d50.73779075078343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4722b670fcc66eeb%3A0x23a4ce0291aa1b21!2sDw%C3%B3r%20Dwikozy%20Hotel%20Sandomierz!5e1!3m2!1spl!2spl!4v1677711265730!5m2!1spl!2spl" style={{width: "100%", height: "50vh", border: "0"}} loading="lazy"></iframe>                   
                </Grid>
                <Grid item xs={12} md={8}>
                    <h2>Księga Gości</h2>
                    <p>Zapisz swoje życzenia dla nowożeńców i wpisz się do naszej księgi gości - to piękna pamiątka na lata! Pole do popisu jest szerokie - czeka na Ciebie zarówno tradycyjna księga, jak i froma online!</p>
                    <Grid container style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <Grid item xs={10} md={8}>
                            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScN354-XbBM9KkkDrMfx2a6d7o3k0CyLClwWvWVLYzs1bSmjA/viewform?embedded=true" width="100%" height="1000px" frameborder="0" marginheight="0" marginwidth="0">Ładuję…</iframe>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={8} id="contact">
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