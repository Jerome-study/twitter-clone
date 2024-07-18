import { useFormValidation } from "../../hooks/useFormValidatioin";
import { FormProps } from "../../models/zod";
import { InputProps } from "../../models/typescript";
import { Grid, TextField, Button, Box, Link, Alert } from "@mui/material";
import { Google } from "@mui/icons-material";
import { LoadingBackDrop } from "../mui/loading/backdrop";
import { Logo } from "../mui/logo";

export const AuthenticationForm = ({ inputs, formType }: { inputs: InputProps[], formType: string }) => {
    const { register, handleSubmit, onSubmit, firebaseErrror, errors, handleGoogle, loading, googleLoading } = useFormValidation(formType);
    const isRegister = formType === "register" ? true : false
    return (
        <>
            { loading && <LoadingBackDrop /> }
            <Grid container justifyContent="center" alignItems="center" sx={{ height: "100vh", px: {
                xs: 2,
                lg:0
            } }}>
                <Grid item xs={12} sm={8} md={6} lg={4}>
                    <Box>
                        <Logo />
                        <Box component="form" sx={{ display: "grid", gap: 2 }} onSubmit={handleSubmit(onSubmit)}>
                            {firebaseErrror && <Alert severity="error">{firebaseErrror}</Alert>}
                            {inputs.map(input => {
                                return (
                                    <div key={input.name}>
                                        <TextField
                                            color="info"
                                            type={input.type}
                                            label={input.placeholder}
                                            variant="outlined"
                                            fullWidth
                                            helperText={errors[input.name as keyof FormProps] && errors[input.name as keyof FormProps]?.message}
                                            {...register(input.name as keyof FormProps)}
                                        />
                                    </div>
                                )
                            })}
                            <Button type="submit" variant="contained" color={"info"} fullWidth style={{ marginTop: '10px' }}>
                                {loading ? "loading" : formType.toUpperCase()}
                            </Button>
                            <Button onClick={handleGoogle} variant="outlined" sx={{ color: "primary.light"}} startIcon={<Google color="success" />}>
                               {googleLoading ? "loading" : "Continue with Google"}
                            </Button>
                            <Link sx={{ color: "primary.light"}} textAlign="center" href={isRegister ? "/login" : "register" } variant="body2">
                                {isRegister ? "Already have an account? Login" : "Don't have an account? Register"}
                            </Link>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}