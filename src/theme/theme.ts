import { createTheme } from "@mui/material/styles";
import { red, grey } from '@mui/material/colors';

declare module "@mui/material/styles" {
    interface PaletteOptions {
        TweetsColor?: {
            displayName: string,
            username: string
        },
        HomeComponentColors: {
            divider: string
        }
    }
}

export const theme = createTheme({
    palette: {
        mode: "light",
        TweetsColor : {
            displayName: red[500],
            username: grey[700]
        },
        HomeComponentColors : {
            divider: grey[300]
        }
    },
    typography: {
        fontFamily: 'Segoe UI, Arial, sans-serif'
    }
})