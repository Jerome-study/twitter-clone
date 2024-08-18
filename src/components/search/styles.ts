export const styles = {
    TextFieldStyle: {
        p: 2,
        width: '100%',
        '& .MuiOutlinedInput-root': {
            borderRadius: 20,
            bgcolor: "custom.lightBlue"
        }
    },
    BodyStyle: { 
        px: 2 
    },
    ContainerStyle: { 
        px: 1.5, py: 2, 
        height: { xs: "64vh", lg: "77vh" }, 
        bgcolor: "custom.lightBlue", 
        borderRadius: 5 
    },
    NoResultContainerStyle: { 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        height: "100%" 
    },
    TrendingSectionStyle: { 
        height: { xs: "53vh", lg: "67vh" }, 
        overflow: "scroll" 
    },
    TrendingCardStyle: { 
        borderRadius: 0, 
        py: 1.5, 
        bgcolor: "custom.lightBlue" 
    },
    UserCardStyle: { 
        borderRadius: 3 
    },
    UserCardHeaderStyle: { 
        fontSize: 13, 
        fontWeight: 900 
    },
    UserCardSubheaderStyle: { 
        fontSize: 11, 
        fontWeight: 400 
    },
    UserCardActionStyle: { 
        bgcolor: "custom.blue", 
        borderRadius: 4, 
        fontSize: 12, 
        fontWeight: 900, 
        mt: 1 
    }
}