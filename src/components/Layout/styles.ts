export const styles = {
    bodyStyle: { 
        backgroundColor: "custom.lightGray",
    },
    mainBoxStyle: (currentAction: string) => ({ 
        minHeight: { xs: "75vh", lg: "100vh" },
        py: { xs: 2, lg : 4.5 },
        display: { xs: "flex", lg: "block"},
        transform: currentAction === "Explore" ? "translateX(-100%)" : undefined,
        transition: "0.1s"
    }),
    childrenStyle: (currentAction: string, isHome?: boolean | undefined) => ({ 
        flexShrink: 0, 
        width: "100%",
        height: currentAction === "Explore" && isHome ? "75vh" : "unset"
    }),
    containerStyle: { 
        bgcolor: "custom.lightGray", 
        maxWidth: "xl", 
        marginInline: "auto",
        overflow: { xs: "hidden", lg: "unset"},
    },
    rightBoxStyle: {
        position: 'sticky',
        overflow: "scroll",
        backgroundColor: "custom.white",
        height: "90vh",
        top: 35,
        borderRadius: 5,
        zIndex: 1
    },
    leftBoxStyle: {
        position: 'sticky',
        backgroundColor: "custom.white",
        height: "90vh",
        top: 35,
        zIndex: 1,
        borderRadius: 5
    }
}