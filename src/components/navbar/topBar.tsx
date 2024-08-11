import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { Logo } from '../mui/Logo';
import { styles } from './styles';

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
                <AppBar sx={styles.appBarStyle}>
                    <Toolbar sx={{ justifyContent: 'space-between' }}>
                        <Avatar alt="Avatar" src={avatarUrl} onClick={toggleDrawer} />
                        <Box sx={styles.emptBoxStyle} />
                        <Logo size={26} inTopBar={true} />
                        <Box sx={styles.emptBoxStyle} />
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
        </>
    )
}