import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import XIcon from '@mui/icons-material/X';

interface Props {
    window?: () => Window;
    children: React.ReactElement;
}

function HideOnScroll(props: Props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}


export const TopBar = ({ toggleDrawer } : any) => {
    const avatarUrl = 'https://via.placeholder.com/150';

    return (
        <>

            <HideOnScroll>
                <AppBar sx={{ backgroundColor: '#00acee', py: 1 }}>
                    <Toolbar sx={{ justifyContent: 'space-between' }}>
                        <Avatar alt="Avatar" src={avatarUrl} onClick={toggleDrawer} />
                        <Box sx={{ flexGrow: 1 }} />
                            <XIcon sx={{ mr: 2 }} />
                        <Box sx={{ flexGrow: 1 }} />
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar />
        </>
    )
}