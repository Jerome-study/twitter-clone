import { Box, Skeleton, CardContent, Card } from "@mui/material"

export const TweetSkeleton = () => {
  return (
    <>
      <Card sx={{ borderRadius: 0, boxShadow: 0, borderBottom: '1px solid #ccc', display: 'flex', gap: 2, px: 2, py: 1.5 }}>
        <Box>
          <Skeleton variant="circular" width={40} height={40} />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
          <Skeleton variant="text" width={100} sx={{ fontSize: '.7rem' }} />
          <CardContent sx={{ px: 0, py: 1 }}>
            <Skeleton variant="rounded" height={150}/>
          </CardContent>
        </Box>
      </Card>
    </>
  )
}
