import { Box, Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import React from 'react';
import { useStyles } from './HeaderStyles';

export default function DrawerComponent({ initialState, handleDrawer, navlinks }) {
    const classes = useStyles();
    return (
        <Drawer anchor='left' open={initialState} onClose={handleDrawer} className={classes.drawer}>
            <Box className={classes.drawerContainer}>
                <List style={{paddingTop:"30px"}}>
                    {navlinks.map((items, i) => (
                    <ListItem key={i} className={classes.listItem}>
                        <ListItemText>{items.label}</ListItemText>
                    </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
}
