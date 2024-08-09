import { Grid, TextField } from "@mui/material"
import { FormProps } from "../../../models/zod"
import { styles } from "./styles"
import { FormFieldProps } from "../../../models/typescript"

export const FormTextField = ({ input, register, errors, isRegister }: FormFieldProps) => {
    return (
        <Grid item xs={12} lg={(input.name !== "email" && isRegister) ? 6 : 12}>
            <TextField
                key={input.name}
                type={input.type}
                label={input.placeholder}
                variant="outlined"
                fullWidth
                size="small"
                helperText={errors[input.name as keyof FormProps] && errors[input.name as keyof FormProps]?.message}
                {...register(input.name as keyof FormProps)}
                sx={styles.textFieldStyle}
            />
        </Grid>
    )
}