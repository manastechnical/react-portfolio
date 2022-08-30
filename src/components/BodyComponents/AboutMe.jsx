import { Box, Grid, Container } from '@material-ui/core';
import React from 'react';
import { useStyles } from './BodyStyles';
import image from '../../images/About.jpg';
import { RenderSectionHeading, CardMedia } from '../common/commonComponents';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import WebIcon from '@material-ui/icons/Web';
import StorageIcon from '@material-ui/icons/Storage';
import BugReportIcon from '@material-ui/icons/BugReport';
import ScrollAnimation from 'react-animate-on-scroll';

export default function AboutMe() {
    const classes = useStyles();
    const cardMediaData = [
        { title: "Web Development", description: "Created various websites using HTML, CSS, JS,etc.", icon: <WebIcon /> },
        { title: "Database Management", description: "Have knowledge about Relational DBs, Non-relational DBs,etc.", icon: <StorageIcon /> },
        { title: "Android Development", description: "Created android applications such as Registration App, Cryptology App, etc.", icon: <PhoneAndroidIcon /> },
        { title: "Software Engineering", description: "Have knowledge about Software Development Life Cycle, STLC etc.", icon: <BugReportIcon /> },
    ];
    return (
        <Box className={classes.section} id="About Me">
            <ScrollAnimation animateIn='fadeIn'>
            <Container>
                <Grid container spacing={1}>
                    <Grid item sm={5}>
                        <Box>
                            <img src={image} alt="about me" className={classes.responsiveImg} />
                        </Box>
                    </Grid>
                    <Grid item sm={7} className={classes.renderedObjs}>
                        {RenderSectionHeading({
                            smallTxt: "ABOUT ME",
                            heading: "Hello, I'm Manas Jagtap",
                            description: "A self taught developer who is always eager to learn and try new things, grasp knowledge and get experience.",
                            alignCenter: false
                        }
                        )}
                        <br />
                        <Grid container>
                            {cardMediaData.map((item, i) =>
                            (<Grid item xs={12} sm={6} key={i}>
                                {CardMedia({
                                    label:item.title,
                                    desc:item.description,
                                    icon:item.icon,
                                })}
                            </Grid>)
                            )}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            </ScrollAnimation>
        </Box>
    );
}
