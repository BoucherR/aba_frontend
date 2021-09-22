import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { Link } from 'react-router-dom';

import { ChildCare, Settings, Psychology, AccountCircle } from '@mui/icons-material/';
import { ListSubheader } from '@mui/material';

const drawerWidth = 240;

function NavDrawer() {

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List
                subheader={
                    <ListSubheader component="div" id="subheader1">
                        General
                    </ListSubheader>
                }
            >
                <ListItem button key={"My Patients"} component={Link} to={"/myPatients"}>
                    <ListItemIcon>
                        <ChildCare />
                    </ListItemIcon>
                    <ListItemText primary={"My Patients"} />
                </ListItem>
            </List>
            <Divider />
            <List
                subheader={
                    <ListSubheader component="div" id="subheader1">
                        Settings
                    </ListSubheader>
                }
            >
                <ListItem button key={"Settings"} component={Link} to={"/settings"}>
                    <ListItemIcon>
                        <Settings />
                    </ListItemIcon>
                    <ListItemText primary={"Settings"} />
                </ListItem>
            </List>
            <Divider />
            <List
                subheader={
                    <ListSubheader component="div" id="subheader1">
                        Admin
                    </ListSubheader>
                }
            >
                <ListItem button key={"Therapists"} component={Link} to={"/therapists"}>
                    <ListItemIcon>
                        <Psychology />
                    </ListItemIcon>
                    <ListItemText primary={"Therapists"} />
                </ListItem>
            </List>
        </div>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar >
                    <Typography
                        variant="h6"
                        // noWrap
                        component="div"
                    >
                        APP TITLE HERE
                    </Typography>
                    <Box sx={{ marginLeft: 'auto' }}>
                        <IconButton >
                            <Settings />
                        </IconButton>
                        <IconButton >
                            <AccountCircle />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>

            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                anchor="left"
            >
                {drawer}
            </Drawer>
        </Box>
    );
}

export default NavDrawer;
