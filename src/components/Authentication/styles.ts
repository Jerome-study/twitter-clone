export const styles = {
    authStyle: {
        bgcolor: "custom.lightGray",
        height: { lg: "100vh" },
        display: { lg: "flex" },
        alignItems: { lg: "center" }
    },
    gridStyle: {
        bgcolor: "custom.white",
        maxWidth: "lg",
        marginInline: "auto",
        height: { lg: "80%" },
        alignItems: { lg: "center" }
    },
    logoGridStyle: (isRegister: Boolean) => ({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: { xs: "30vh", lg: "100%" },
        bgcolor: isRegister ? "custom.black" : "custom.blue"
    }),
    labelStyle: {
        textAlign: "center",
        mb: 1,
        fontWeight: 900,
        fontSize: { xs: "12px", lg: "24px" }
    },
    alertStyle: {
        py: 0, mb: 1.2
    },
    buttonStyle: (isGoogle : Boolean) => ({
        fontSize: { xs: 10, lg: 13 },
        fontWeight: 700,
        width: "100%",
        backgroundColor: isGoogle ? "custom.black" : "custom.blue"
    }),
    orStyle: { 
        my: 0.75, 
        textAlign: "center", 
        fontSize: "12px" 
    },
    linkStyle: {
        mt: 1,
        color: "custom.blue",
        textAlign: "center",
        fontSize: { xs: "10px", lg: "13px" },
        fontWeight: 300
    },
    textFieldStyle: {
        '& .MuiOutlinedInput-root': { borderRadius: '5px', },
        '& .MuiInputBase-input': { paddingY: { xs: 0.8, lg: 1} },
        '& .MuiInputLabel-root': { fontSize: { xs: "10px", lg: "13px" } }
    },
}