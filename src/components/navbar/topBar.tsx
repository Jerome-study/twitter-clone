import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar';
import { Logo } from '../mui/Logo';
import { styles } from './styles';
import { Typography, Container } from '@mui/material';

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


export const TopBar = ({ toggleDrawer }: any) => {
    const avatarUrl = 'https://via.placeholder.com/150';

    return (
        <>

            <HideOnScroll>
                <AppBar sx={styles.appBarStyle}>
                    <Container sx={styles.containerStyle} disableGutters>
                        <Toolbar sx={{ justifyContent: 'space-between', mb: 2 }}>
                            <Avatar alt="Avatar" src={avatarUrl} onClick={toggleDrawer} />
                            <Box sx={styles.emptBoxStyle} />
                            <Logo size={26} inTopBar={true} />
                            <Box sx={styles.emptBoxStyle} />
                        </Toolbar>
                        <Grid container justifyContent={"center"} gap={4}>
                            <Grid xs={4} item sx={{ pb: 3, textAlign: "center", borderBottom: "3px solid red" }}>
                                <Typography variant='h6' sx={{ color: "custom.black", fontWeight: 900, fontSize: 15 }}>For you</Typography>
                            </Grid>
                            <Grid xs={4} item sx={{ pb: 3, textAlign: "center" }}>
                                <Typography variant='h6' sx={{ color: "custom.black", fontWeight: 900, fontSize: 15 }}>Following</Typography>
                            </Grid>
                        </Grid>
                    </Container>
                </AppBar>
            </HideOnScroll>
        </>
    )
}