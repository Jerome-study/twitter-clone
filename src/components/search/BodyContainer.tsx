import { Box } from "@mui/material"
import { ReactNode } from "react"
import { styles } from "./styles"

export const BodyContainer = ({ children } : { children : ReactNode }) => {
    return(
        <>
            <Box sx={styles.BodyStyle}>
                <Box sx={styles.ContainerStyle}>
                    {children}
                </Box>
            </Box>
        </>
    )
}