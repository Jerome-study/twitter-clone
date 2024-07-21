import { Card, CardHeader, Skeleton } from "@mui/material"


export const UserCardSkeleton = () => {
    return(
        <>
            <Card sx={{ borderRadius: 0 }}>
                <CardHeader
                        avatar={
                            <Skeleton variant="circular" width={40} height={40} />
                        }
                        title={<Skeleton variant="text" width={160}/>}
                        subheader={<Skeleton variant="text" width={80}/>}
                />
            </Card>
        </>
    )
}