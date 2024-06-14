import { useState } from 'react';
import { NavList } from './const';
import { Link } from 'react-router-dom';
import { useLogout } from '../../hooks/useLogout';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import SettingsIcon from '@mui/icons-material/Settings';
import Collapse from '@mui/material/Collapse';
import LogoutIcon from '@mui/icons-material/Logout';
import XIcon from '@mui/icons-material/X';

const drawerWidth = 300;

export const SideNavbar = ({ isMobile, isDrawerOpen, toggleDrawer } : any) => {
    const [open, setOpen] = useState(false);
    const { logout } = useLogout();
    const isTemporary = isMobile ? "temporary" : "permanent"
    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant={isTemporary}
                anchor="left"
                open={isDrawerOpen}
                onClose={toggleDrawer}
            >
                <List sx={{ px: 5}}>
                    <ListItem sx={{ py: 0, mb: 3}}>
                        <XIcon />
                    </ListItem>
                    
                    {NavList.map((text) => (
                        <ListItem sx={{ bgcolor: "transparent"}} key={text.name} disablePadding>
                            <ListItemButton component={Link} to={text.path}>
                                <ListItemIcon>
                                    {text.icon}
                                </ListItemIcon>
                                <ListItemText primary={text.name} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                    <ListItemButton onClick={handleClick}>
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton onClick={logout} sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <LogoutIcon />
                                </ListItemIcon>
                                <ListItemText primary="Logout" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                </List>
            </Drawer>
        </>
    )
}