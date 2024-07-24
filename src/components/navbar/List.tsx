import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import LogoutIcon from '@mui/icons-material/Logout';
import { Typography, Button } from '@mui/material';
import { Logo } from '../mui/logo';
import { NavList } from './const';
import { Link } from 'react-router-dom';
import { useLogout } from '../../hooks/useLogout';
import { Fragment, useState } from 'react';
import { useResponsive } from '../../hooks/useResponsive';
import { useTweet } from '../../context/tweetProvider';

export const NavigationLeftList = () => {
    const [open, setOpen] = useState(false);
    const { logout } = useLogout();
    const { isMobile } = useResponsive();
    const { focusInput } = useTweet()

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <>
            <List sx={{ px: { xs: 2, lg: 5 } }}>
                <ListItem >
                    <Logo />
                </ListItem>

                {NavList.map((text) => (
                    ((text.isLargeView && !isMobile ) || text.isMobileView && isMobile) &&
                    <Fragment key={text.name}>
                        <ListItem sx={{ bgcolor: "transparent", mb: 1 }} disablePadding>
                            <ListItemButton component={Link} to={text.path || "#"} onClick={() => text?.isCollapse ? handleClick() : undefined}>
                                <ListItemIcon>
                                    {text.icon}
                                </ListItemIcon>
                                <ListItemText
                                    primary={
                                        <Typography variant='h6' sx={{ fontSize: { xs: 17, lg: 20 }, fontWeight: 700 }}>
                                            {text.name}
                                        </Typography>
                                    }
                                />
                                {text.isCollapse && <>{open ? <ExpandLess /> : <ExpandMore />}</>}
                            </ListItemButton>
                        </ListItem>
                        {text.isCollapse &&
                            <Collapse in={open} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton onClick={logout} sx={{ pl: 4 }}>
                                        <ListItemIcon>
                                            <LogoutIcon sx={{ fontSize: { xs: 12, lg: 15}, color: 'info.light' }} />
                                        </ListItemIcon>
                                        <ListItemText primary={
                                            <Typography sx={{ fontSize: { xs: 13, lg: 15 }, fontWeight: 600 }}>
                                                Logout
                                            </Typography>}
                                        />
                                    </ListItemButton>
                                </List>
                            </Collapse>
                        }
                    </Fragment> 
                ))}
                {!isMobile && <Button onClick={() => focusInput()} variant='contained' sx={{ borderRadius: 50, width: '100%', py:2,  mt : 2, fontWeight: 700, fontSize: { xs: 13, lg: 17} }}>Tweet</Button>}
            </List>
        </>
    )
}