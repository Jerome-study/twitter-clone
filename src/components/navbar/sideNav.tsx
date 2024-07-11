import Drawer from '@mui/material/Drawer';
import { NavigationLeftList } from './List';


const drawerWidth = 300;

export const SideNavbar = ({ isDrawerOpen, toggleDrawer } : any) => {
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
                variant={"temporary"}
                anchor="left"
                open={isDrawerOpen}
                onClose={toggleDrawer}
            >
                <NavigationLeftList />
            </Drawer>
        </>
    )
}