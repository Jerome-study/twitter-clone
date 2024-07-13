import { Box, CardMedia, Skeleton } from "@mui/material";
import { Fragment, useState } from "react";

export const TweetImages = ({ images }: any) => {

    return (
        <Box sx={{mb: 2, display: "grid", gridTemplateColumns: images.length > 1 ? "repeat(2, 1fr)" : "", gap: 1 }}>
            {images.map((image: string, index: number) => {
                const [isLoaded, setIsLoaded] = useState(false);

                const handleImageLoad = () => {
                    setIsLoaded(true);
                };

                return (
                    <Fragment key={index}>
                        <CardMedia
                            component="img"
                            sx={{ display: "none", borderRadius: 3, boxShadow: 2, height: "100%", gridRow: (images.length === 3 && index === 0) ? "span 2" : "" }}
                            onLoad={handleImageLoad}
                            image={image}
                            alt="tweet image"
                        />
                        {!isLoaded &&
                            <Skeleton variant='rectangular' sx={{ paddingTop: (images.length === 3 && index === 0) ? '100%' : '57%', borderRadius: 3, boxShadow: 2, gridRow: (images.length === 3 && index === 0) ? "span 2" : "" }} />
                        }
                        {isLoaded &&
                            <CardMedia
                                component="img"
                                sx={{ borderRadius: 3, boxShadow: 2, height: "100%", gridRow: (images.length === 3 && index === 0) ? "span 2" : "" }}
                                image={image}
                                alt="tweet image"
                            />
                        }
                    </Fragment>
                )
            })}
        </Box>
    )
}