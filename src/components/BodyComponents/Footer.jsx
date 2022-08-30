import { Box, IconButton, Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './BodyStyles';
import ArrowUpwardRoundedIcon from '@material-ui/icons/ArrowUpwardRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import { Link } from 'react-scroll';

export default function Footer() {
    var date = new Date();
    const classes = useStyles();
    return (
        <Box className={classes.footerContainer} id="Footer">
            <IconButton className={classes.iconButton} activeClass='active' to="Header" spy={true} smooth={true} offset={-70} duration={1000} component={Link}>
                <ArrowUpwardRoundedIcon/>
            </IconButton>
            <Typography variant="body1" container="h4" align="center" color="inherit">
                Developed and Designed with <FavoriteRoundedIcon style={{color:"red"}}/> by Manas Jagtap, All Rights Reserved @ {date.getFullYear()}
            </Typography>
        </Box>
    );
}
