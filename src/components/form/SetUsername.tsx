import { TextField, Button, Box, Typography, Alert } from "@mui/material";
import { useState } from "react";
import { useAuth } from "../../context/authProvider";
import { useFireStore } from "../../config/firebase";
import { Logo } from "../mui/logo";
import { LoadingBackDrop } from "../mui/loading/backdrop";

export const SetUsernameComponent = () => {
    const { currentUser } = useAuth();
    const { updateDoc, db, doc } = useFireStore();
    const [username, setUsername] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (!username) return setError("Username is required!");
        if (username.length < 3) return setError("Username should atleast 3 or more characters!")

        setLoading(true);
        setError("");

        try {
            const userDocRef = doc(db, "users", currentUser.uid);
            await updateDoc(userDocRef, { username });
            window.location.href = "/"
        } catch(error : any) {
            setError(error?.message || "Something went wrong, try again later!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            { loading && <LoadingBackDrop />}
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 5 }}>
                <Logo />
                <Typography variant="body1" gutterBottom>Set Up Your Username</Typography>
                <form onSubmit={handleSubmit}>
                    {error && <Alert sx={{ my: 1}} severity="error">{error}</Alert>}
                    <TextField
                        label="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        fullWidth
                        variant="outlined"
                        sx={{ mb: 2 }}
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth disabled={loading}>
                        {loading ? "Setting Up..." : "Set Username"}
                    </Button>
                </form>
            </Box>
        </>
    )
}