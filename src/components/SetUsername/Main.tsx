import { TextField, Button, Box, Typography } from "@mui/material";
import { Logo } from "../mui/logo";
import { LoadingBackDrop } from "../mui/loading/backdrop";
import { useResponsive } from "../../hooks/useResponsive";
import { useSetUsername } from "../../hooks/useSetUsername";
import { styles } from "./styles";

export const MainSetUsername = () => {
    const { username, setUsername, error, loading, handleSubmit } = useSetUsername();
    const { isMobile } = useResponsive();

    return (
        <Box sx={styles.bodyStyle}>
            {loading && <LoadingBackDrop />}
            <Box sx={styles.containerStyle}>
                <Logo size={isMobile ? null : 64} />
                <Box sx={styles.formStyle} component="form" onSubmit={handleSubmit}>
                    <Typography sx={styles.labelStyle}>Set Your Username</Typography>
                    <TextField
                        label="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        fullWidth
                        size="small"
                        variant="standard"
                        helperText={error ? error : ""}
                        sx={{ width: "100%", mb: 2 }}
                    />
                    <Button sx={styles.buttonStyle} type="submit" variant="contained" color="primary" fullWidth disabled={loading}>
                        {loading ? "Setting Up..." : "Enter"}
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}