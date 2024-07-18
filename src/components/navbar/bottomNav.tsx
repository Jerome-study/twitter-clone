import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Paper, Toolbar } from '@mui/material';
import { BottomNavlist } from './const';
import { useState } from 'react';

export const BottomNavbar = ({ handleBottomNavAction } : { handleBottomNavAction : Function }) => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        event.preventDefault();
        setValue(newValue);
    };
   
    return (
        <>
            <Toolbar />
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={5}>
                <BottomNavigation value={value} onChange={handleChange} >
                    {BottomNavlist.map((text) => (
                        <BottomNavigationAction onClick={() => handleBottomNavAction(text.name)} key={text.name} icon={text.icon} />
                    ))}
                </BottomNavigation>
            </Paper>
        </>
    )
}