export const styles = {
    mainBoxStyle: { 
        mt: { lg: 0, xs: 1.5 }, 
        width: "100%", 
    },
    rightBoxStyle: {
        position: 'sticky',
        overflow: "scroll",
        top: 0,
        height: '100vh',
        width: '100%',
        borderLeft: '1px solid #ccc',
        zIndex: 1
    },
    leftBoxStyle: {
        position: 'sticky',
        top: 0,
        height: { lg: "100vh" },
        width: '100%',
        borderRight: '1px solid #ccc',
        zIndex: 1,
    }
}