import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import LogoutIcon from '@mui/icons-material/Logout';
import { Typography, Button, Box, Avatar, ListItemAvatar } from '@mui/material';
import { Logo } from '../mui/Logo';
import { NavList } from './const';
import { Link } from 'react-router-dom';
import { useLogout } from '../../hooks/useLogout';
import { Fragment, useState } from 'react';
import { useResponsive } from '../../hooks/useResponsive';
import { useTweet } from '../../context/tweetProvider';
import { styles } from './styles';

export const NavigationLeftList = () => {
    const [open, setOpen] = useState(false);
    const avatarUrl = 'https://via.placeholder.com/150';
    const { logout } = useLogout();
    const { isMobile } = useResponsive();
    const { focusInput, userInfo } = useTweet()

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <>
            <List sx={styles.listContainerStyle}>
                <Box sx={{ px: { xs: 2, lg: 5 }, mb: { lg: 1 } }}>
                    <Logo isCenter={false} size={isMobile ? 27 : 40} />
                </Box>
                {isMobile &&
                    <>
                        <ListItemAvatar sx={{ px: 2, my : 2 }}>
                            <Avatar alt="Avatar" src={avatarUrl} />
                        </ListItemAvatar>
                        <Box sx={{ px: 2.3, mb : 1 }}>
                            <Typography sx={{ fontSize: 14, fontWeight: 700, }}>{userInfo.first_name + " " + userInfo.last_name}</Typography>
                            <Typography sx={{ fontSize: 12, fontWeight: 400, color: "custom.darkGray" }}>{"@" + userInfo.username}</Typography>
                        </Box>
                    </>
                }

                {NavList.map((text) => (
                    ((text.isLargeView && !isMobile) || text.isMobileView && isMobile) &&
                    <Fragment key={text.name}>
                        <ListItem sx={styles.listItemContainerStyle} disablePadding>
                            <ListItemButton sx={{ px: { lg: 5 }}} component={Link} to={text.path || "#"} onClick={() => text?.isCollapse ? handleClick() : undefined}>
                                <ListItemIcon>
                                    {text.icon}
                                </ListItemIcon>
                                <ListItemText
                                    primary={
                                        <Typography variant='h6' sx={styles.listNameStyle}>
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
                                    <ListItemButton onClick={logout} sx={{ px: 10 }}>
                                        <ListItemIcon>
                                            <LogoutIcon sx={styles.collapseListIconStyle} />
                                        </ListItemIcon>
                                        <ListItemText primary={
                                            <Typography sx={styles.collapseListNameStyle}>
                                                Logout
                                            </Typography>}
                                        />
                                    </ListItemButton>
                                </List>
                            </Collapse>
                        }
                    </Fragment>
                ))}
                {!isMobile && <Box sx={{ px: 5}}>
                        <Button onClick={() => focusInput()} variant='contained' sx={styles.tweetButtonStyle}>Tweet</Button>
                    </Box>}
            </List>
        </>
    )
}