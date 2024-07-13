import { actionBar } from './const';
import { Box, IconButton, Typography } from '@mui/material';

export const ActionComponent = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: { xs: 'space-between', lg: 'unset' }, gap: { lg: 15 } }}>
            {actionBar.map(action => {
                return (
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton aria-label="like" sx={{ p: 0 }}>
                            {action.icon}
                        </IconButton>
                        {action.hasCount && <Typography variant='body2' sx={{ ml: 0.5 }}>
                            {0}
                        </Typography>}
                    </Box>
                )
            })}
        </Box>
    )
}