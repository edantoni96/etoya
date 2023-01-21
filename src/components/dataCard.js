import {Card, CardContent, CardMedia, Typography, Grid} from "@mui/material"
//import {makeStyles} from "@mui/s"

const dataCard = (data) => {
  const {tds,flow,ph,dist} = data
  return (
    <Grid container justifyContent="center" alignItems="center" spacing={3} p={4}>
      <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{fontSize:15}} component="div">
                TDS
              </Typography>
              <Typography variant="body2" sx={{fontSize:25}}>
                {tds.toFixed(1)} ppm
              </Typography>
            </CardContent>
          </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{fontSize:15}} component="div">
                Debit Air
              </Typography>
              <Typography variant="body2" sx={{fontSize:25}}>
                {flow.toFixed(1)} L/min
              </Typography>
            </CardContent>
          </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{fontSize:15}} component="div">
                Keasaman
              </Typography>
              <Typography variant="body2" sx={{fontSize:25}}>
                {ph.toFixed(2)} pH
              </Typography>
            </CardContent>
          </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{fontSize:15}} component="div">
                Level Air
              </Typography>
              <Typography variant="body2" sx={{fontSize:25}}>
                {dist.toFixed(0)} cm
              </Typography>
            </CardContent>
          </Card>
      </Grid>
    </Grid>
  )
}

export default dataCard