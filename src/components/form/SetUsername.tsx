import { TextField, Button, Box, Container } from "@mui/material";
import { useState } from "react";
import { useAuth } from "../../context/authProvider";
import { useFireStore } from "../../config/firebase";
import { Logo } from "../mui/logo";
import { LoadingBackDrop } from "../mui/loading/backdrop";
import { useResponsive } from "../../hooks/useResponsive";

export const SetUsernameComponent = () => {
    const { currentUser } = useAuth();
    const { updateDoc, db, doc, getDocs, collection, query, where, getDoc } = useFireStore();
    const { isMobile } = useResponsive();
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
            const userRef = collection(db, "users");
            const q = query(userRef, where("username", "==", username));
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                setError("Username is already taken!");
                setLoading(false);
                return;
            }

            const userDocRef = doc(db, "users", currentUser.uid);
            const snap = await getDoc(userDocRef)

            if (!snap.exists()) return

            const usernameLower = username.toLowerCase();
            const firstNameLower = snap?.data()?.first_name.toLowerCase();
            const lastNameLower = snap?.data()?.last_name?.toLowerCase()
            const searchStrings = [usernameLower, firstNameLower, lastNameLower]

            await updateDoc(userDocRef, { username, searchStrings });
            window.location.href = "/"
        } catch (error: any) {
            setError(error?.message || "Something went wrong, try again later!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Container maxWidth="lg">
                {loading && <LoadingBackDrop />}
                <Box sx={{ display: "flex", height: "100vh", flexDirection: "column", justifyContent: "center" }}>
                    <Logo size={isMobile? null : 150} />
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }} component="form" onSubmit={handleSubmit}>
                        <TextField
                            label="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            fullWidth
                            size="medium"
                            variant="standard"
                            helperText={error ? error : ""}
                            sx={{ flexBasis: "80%" }}
                        />
                        <Button sx={{ flexBasis: "20%" }} type="submit" variant="contained" color="primary" fullWidth disabled={loading}>
                            {loading ? "Setting Up..." : "Enter"}
                        </Button>
                    </Box>
                </Box>
            </Container>
        </>
    )
}