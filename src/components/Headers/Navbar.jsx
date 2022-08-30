import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button, Hidden,IconButton} from '@material-ui/core';
import { useStyles } from './HeaderStyles';
import MenuOpenRoundedIcon from '@material-ui/icons/MenuOpenRounded';
import { Link } from 'react-scroll';

export default function Navbar({navlinks, handleDrawer}) {
    const classes = useStyles();
    return (
        <AppBar position="fixed" className={classes.navbar}>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" container="h6">
                    {"<My PortFolio/>"}
                </Typography>
                <Box component={Hidden} xsDown>
                    <Box>
                        {navlinks.map((item,i) => (
                            <Button key={i} className={classes.navlink} activeClass='active' to={`${item.Id}`} spy={true} smooth={true} offset={-70} duration={500} color="inherit" component={Link}>
                                {item.label}
                            </Button>
                        ))}
                    </Box>
                </Box>
                <Box component={Hidden} smUp>
                    <IconButton className={classes.navlink} color="inherit" onClick={handleDrawer}>
                        <MenuOpenRoundedIcon/>
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
