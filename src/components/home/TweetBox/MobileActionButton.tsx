import { Box, Button } from "@mui/material"

export const MobileActionButton = ({ toggleDrawer, handleOpenModal } : { toggleDrawer: Function, handleOpenModal: Function }) => {
    return (
        <Box sx={{ bgcolor: "custom.black", px: 1, py: 2 }}>
            <Button
                sx={{ color: "custom.white", fontWeight: 700 }}
                onClick={() => toggleDrawer()}
            >
                CANCEL
            </Button>
            <Button
                sx={{ float: "right", borderRadius: 2, fontWeight: "700", color: "custom.blue" }}
                onClick={(e) => handleOpenModal(e)}
            >
                TWEET
            </Button>

        </Box>
    )
}