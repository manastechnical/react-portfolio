import React, { useState } from 'react';
import { Box,} from '@material-ui/core';
import { useStyles } from './HeaderStyles';
import Navbar from './Navbar';
import {Decorator} from '../common/commonComponents'
import ArrowDownwardRoundedIcon from '@material-ui/icons/ArrowDownwardRounded';
import DrawerComponent from './DrawerComponent';
import Typed from 'react-typed';

export default function HeadersComponent() {
    const classes = useStyles();
    const [initialState, setInitialState] = useState(false);
    const handleDrawer = () => {
        setInitialState(!initialState);
    }

    const navlinks = [
        { label: "About Me", Id: "About Me" },
        { label: "Portfolio", Id: "Portfolio" },
        { label: "Contact", Id: "Contact" },
    ]

    return (
        <Box className={classes.HeaderWraper} id="Header">
            <Navbar navlinks={navlinks} handleDrawer={handleDrawer}/>
            <DrawerComponent initialState={initialState} navlinks={navlinks} handleDrawer={handleDrawer}/>
            <Box className={classes.Headercontainer}>
                <div className={classes.headerTitle}>
                    I'm a <span style={{paddingRight:"5px"}}></span>
                    <Typed
                        strings={["Web Developer,","Database Manager,","Student,"]}
                        typedSpeed={2000}
                        backSpeed={50}
                        loop
                    />
                </div>
                <div className={classes.headerDesc}>
                    I create Website and Application,
                    <br/>
                    Based on your needs.
                </div>
                {Decorator({
                    label:"About Me", 
                    withIcon:true, 
                    Icon: <ArrowDownwardRoundedIcon/>})}
            </Box>
        </Box>
    );
}