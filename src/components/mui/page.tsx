import { Grid, Box } from "@mui/material"


export const MuiPlayground = () => {
  return (
    <>
      <Grid container>
        <Grid item lg={4} xs={12}>
          <Box bgcolor={"red"}>left</Box>
        </Grid>
        <Grid item lg={4} xs={12}>
          <Box bgcolor={"yellow"}>Main</Box>
        </Grid>
        <Grid item lg={4} xs={12}>
          <Box bgcolor={"blue"}>Right</Box>
        </Grid>
      </Grid>
    </>
  )
}
