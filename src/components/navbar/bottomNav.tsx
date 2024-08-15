import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Paper, Toolbar } from '@mui/material';
import { BottomNavlist } from './const';
import { useState } from 'react';
import { styles } from './styles';
import { useAuthActions } from '../../context/authActions';

export const BottomNavbar = () => {
    const [value, setValue] = useState(0);
    const { handleBottomNavAction, homeCurrentPosition } = useAuthActions()
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        event.preventDefault();
        homeCurrentPosition();
        setValue(newValue);
    };
   
    return (
        <>
            <Toolbar />
            <Paper sx={styles.bottomNavStyle}>
                <BottomNavigation value={value} onChange={handleChange} >
                    {BottomNavlist.map((text) => (
                        <BottomNavigationAction onClick={() => handleBottomNavAction(text.name)} key={text.name} icon={text.icon} />
                    ))}
                </BottomNavigation>
            </Paper>
        </>
    )
}