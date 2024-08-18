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
            blue: string,
            darkGray: string,
            lightBlue : string
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
            black: "#14171A",
            blue: "#1DA1F2",
            darkGray: "#a6a6a6",
            lightBlue: "#e1e8ed"
        }
    },
    typography: {
        fontFamily: "Roboto, Arial, sans-serif",
        allVariants: {
            color: "#14171A"
        },
        button : {
            textTransform : 'none'
        }
    }
})