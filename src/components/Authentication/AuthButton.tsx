import { Button, CircularProgress } from "@mui/material"
import { styles } from "./styles"
import { AuthButtonProps } from "../../models/typescript"

export const AuthButton = ({ isGoogle, isSubmit, onClick, loading, label }: AuthButtonProps) => {
    return (
        <Button sx={styles.buttonStyle(isGoogle)} variant="contained" type={isSubmit ? "submit" : undefined} onClick={onClick}>
            {loading ? <CircularProgress size={18} /> : label}
        </Button>
    )
}