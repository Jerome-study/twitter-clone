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
        },
        navigationColor: {
            black: string
        },
        custom: {
            lightGray: string,
            white: string,
            black: string,
            blue: string
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
        },
        navigationColor: {
            black: '#000'
        },
        custom: {
            lightGray: "#f2f2f2",
            white: "#ffffff",
            black: "#000000",
            blue: "#38b6ff"
        }
    },
    typography: {
        fontFamily: "Roboto, Arial, sans-serif",
        button : {
            textTransform : 'none'
        }
    }
})