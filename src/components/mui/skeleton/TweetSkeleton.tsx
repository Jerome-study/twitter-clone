import { Box, Skeleton, Paper } from "@mui/material"

export const TweetSkeleton = () => {
  return (
    <>
      <Paper sx={{ borderRadius: { xs: 0, lg: 5 }, boxShadow: 0, borderBottom: '1px solid #ccc', display: 'flex', gap: 2, px: 2, py: 1.5 }} elevation={0}>
        <Box>
          <Skeleton variant="circular" width={40} height={40} />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
          <Skeleton variant="text" width={100} sx={{ fontSize: '.7rem' }} />
          <Paper sx={{  }} elevation={0}>
            <Skeleton variant="rounded" height={150}/>
          </Paper>
        </Box>
      </Paper>
    </>
  )
}
