import { Grid, Box } from "@mui/material";


export const ImageContainer = ({ tweetImages } : { tweetImages: File[]}) => {
    return (
        <Grid container spacing={2} px={2}>
            {tweetImages.map((tweetImage, index) => {
                return (
                    <Grid item xs={4} lg={1.5} key={index} sx={{ mt: 2 }}>
                        <Box component="img" src={URL.createObjectURL(tweetImage)} alt="Uploaded" sx={{ width: "100%", maxWidth: "200px", borderRadius: '8px', marginBottom: '8px', border: "3px solid #ccc" }} />
                    </Grid>
                )
            })}
        </Grid>
    )
}