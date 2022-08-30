import { Box, Grid, Container, Typography, Button } from '@material-ui/core';
import React from 'react';
import { useStyles } from './BodyStyles';
import { RenderSectionHeading, } from '../common/commonComponents';
import image1 from '../../images/5-2.jpg';
import image2 from '../../images/5-3.jpg';
import image3 from '../../images/5-4.jpg';
import image4 from '../../images/5-6.jpg';
import image5 from '../../images/5-8.jpg';
import image6 from '../../images/5-9.jpg';
import ScrollAnimation from 'react-animate-on-scroll';

export default function PortFolio() {
    const classes = useStyles();
    const portfolioData = [
        { url: image1, title: "# Portfolio1", link: "" },
        { url: image2, title: "# Portfolio2", link: "" },
        { url: image3, title: "# Portfolio3", link: "" },
        { url: image4, title: "# Portfolio4", link: "" },
        { url: image5, title: "# Portfolio5", link: "" },
        { url: image6, title: "# Portfolio6", link: "" },
    ]
    return (
        <Box className={classes.sectionDark} id="Portfolio">
            <Grid container style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
                <Grid item xs={12} sm={8}>
                    {RenderSectionHeading({
                        smallTxt: "PORTFOLIO",
                        heading: "Let's see my work!",
                        alignCenter: true,
                    })}
                </Grid>
            </Grid>
            {/* image section  */}
            <ScrollAnimation animateIn='fadeIn'>
                <Container maxWidth='xl'>
                    <Grid container spacing={2}>
                        {portfolioData.map((item, i) => (
                            <Grid item xs={6} sm={6} lg={4} key={i}>
                                <Box className={classes.imgsPortfolio}>
                                    <img src={item.url} alt={item.title} className={classes.responsiveImg} />
                                    <Box className={classes.imageOverlay}>
                                        <Typography className={classes.overlayTitle}>
                                            {item.title}
                                        </Typography>
                                        <Button variant="contained" className={classes.visit}></Button>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </ScrollAnimation>
        </Box>
    );
}
