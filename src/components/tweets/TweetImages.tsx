import { Box, CardMedia, Skeleton } from "@mui/material";
import { Fragment, useState } from "react";

export const TweetImages = ({ images }: { images: string[] }) => {
    return (
        <Box 
            sx={{
                mb: 2,
                display: "grid",
                gridTemplateColumns: images.length > 1 ? "repeat(2, 1fr)" : "1fr",
                gap: 1
            }}
        >
            {images.map((image, index) => {
                const [isLoaded, setIsLoaded] = useState(false);

                const handleImageLoad = () => setIsLoaded(true);

                const gridRow = images.length === 3 && index === 0 ? "span 2" : "";

                const paddingTop = images.length === 3 && index === 0 ? '120%' : '57%';

                return (
                    <Fragment key={index}>
                        {!isLoaded && (
                            <Skeleton 
                                variant="rectangular" 
                                sx={{
                                    paddingTop,
                                    borderRadius: 3,
                                    boxShadow: 2,
                                    gridRow
                                }} 
                            />
                        )}
                        <CardMedia
                            component="img"
                            sx={{
                                display: isLoaded ? "block" : "none",
                                borderRadius: 3,
                                boxShadow: 2,
                                height: "100%",
                                gridRow
                            }}
                            onLoad={handleImageLoad}
                            image={image}
                            alt="tweet image"
                        />
                    </Fragment>
                );
            })}
        </Box>
    );
};