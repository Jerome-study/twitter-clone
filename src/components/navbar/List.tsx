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
import { Logo } from '../../mui/logo';
import { NavList } from './const';
import { Link } from 'react-router-dom';
import { useLogout } from '../../hooks/useLogout';
import { useState } from 'react';

export const NavigationLeftList = () => {
    const [open, setOpen] = useState(false);
    const { logout } = useLogout();
    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <>
                <List sx={{ px: { lg: 5 }}}>
                    <ListItem >
                        <Logo />
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
        </>
    )
}