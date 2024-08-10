import { Grid, Box, Link, Alert, Typography } from "@mui/material";
import { AuthButton } from "./AuthButton";
import { FormTextField } from "./FormTextField";
import { useFormValidation } from "../../hooks/useFormValidatioin";
import { InputProps } from "@mui/material";
import { LoadingBackDrop } from "../mui/loading/backdrop";
import { Logo } from "../mui/Logo";
import { styles } from "./styles";

export const AuthenticationForm = ({ inputs, formType }: { inputs: InputProps[], formType: string }) => {
    const { register, handleSubmit, onSubmit, firebaseErrror, errors, handleGoogle, loading, googleLoading } = useFormValidation(formType);
    const isRegister = formType === "register" ? true : false
    return (
        <Box sx={styles.authStyle}>
            {loading && <LoadingBackDrop />}
            <Grid container sx={styles.gridStyle}>
                <Grid item xs={12} lg={6} order={{ lg: isRegister ? 1 : 2 }} sx={styles.logoGridStyle(isRegister)}>
                    <Logo size={30} inTopBar={true} />
                </Grid>
                <Grid item xs={12} lg={6} p={2} order={{ lg: isRegister ? 2 : 1 }} >
                    <Typography variant="h6" sx={styles.labelStyle}>
                        {isRegister ? "Sign Up" : "Sign In"}
                    </Typography>
                    {firebaseErrror && <Alert sx={styles.alertStyle} severity="error">{firebaseErrror}</Alert>}
                    <Grid spacing={1.5} container component={"form"} onSubmit={handleSubmit(onSubmit)}>
                        {inputs.map(input =>
                            <FormTextField input={input} register={register} errors={errors} isRegister={isRegister} />
                        )}
                        <Grid item xs={12}>
                            <AuthButton isSubmit={true} label={isRegister ? "Sign Up" : "Sign In"} isGoogle={false}/>
                            <Typography variant="h6" sx={styles.orStyle}>Or</Typography>
                            <AuthButton isSubmit={false} onClick={handleGoogle} loading={googleLoading} isGoogle={true} label={"Continue with Google"} />
                            <Typography variant="h6" sx={styles.linkStyle}>
                                <Link href={isRegister ? "/login" : "/register"}>
                                    {isRegister ? "Have an account? Login" : "Don't have an account? Register"}
                                </Link>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}