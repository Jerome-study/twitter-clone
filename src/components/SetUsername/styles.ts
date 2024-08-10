export const styles = {
    bodyStyle: { 
        bgcolor: "custom.lightGray", 
        height: "100vh", 
        display: { lg: "flex" }, 
        alignItems: "center" 
    },
    containerStyle: { 
        display: "flex", 
        height: { xs: "100vh", lg: "80vh"},
        width: { lg: "75%" },
        flexDirection: { xs: "column", }, 
        justifyContent: "center",   
        marginInline: "auto",
        backgroundColor: "custom.white",
        borderRadius: 5,
        px: 5
    },
    buttonStyle: { 
        maxWidth: "10%",
        float: "right" 
    },
    formStyle: {
         width: "80%", 
         marginInline: "auto" 
    },
    labelStyle: { 
        fontWeight: 700, 
        fontSize: { xs: 12, lg: 15 }, 
        textAlign: { xs: "center", lg:"left" },
        my: 1  
    }
}