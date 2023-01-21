import React,{useState} from "react"
import GetData from "./components/GetData"
import {Typography, AppBar, CssBaseline, Toolbar,
   Box, Button, IconButton , Stack, Menu, MenuItem} from "@mui/material"
import WaterIcon from '@mui/icons-material/Water'
import dataCard from "./components/dataCard"


function App() {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const data = GetData()
  console.log(data)
  return (
    <Box>
      <CssBaseline />
      <Box sx={{flexGrow:1}}>
        <AppBar position="relative">
          <Toolbar>
            <IconButton 
              color="inherit" 
              id="resource-button" 
              onClick={handleClick}
              aria-controls={open ? 'resource-menu' : undefined}
              aria-haspopup="true"
              aria-expanded = {open ? "true" : undefined}
            >
              <WaterIcon sx={{fontSize:30}}/>
            </IconButton>
            <Typography sx={{flexGrow:1,fontSize:20}} component="div" p={1}>
              e-Toya
            </Typography>
            <Button variant="outlined" sx={{fontSize:12}} color="inherit">
              Refresh
            </Button>

            <Menu 
              id="resource-menu" 
              anchorEl={anchorEl} 
              open={open}
              aria-labelledby= "resource-button"
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Data</MenuItem>
              <MenuItem onClick={handleClose}>Chart</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </Box>
      
      <Box>
        <Stack direction="row" spacing={1}>
          <Box sx={{flexGrow:1, display:{xs:"none", sm:"block"}}} p={2}>
            <Typography variant="h6">
              Data
            </Typography>
          </Box>
          <Box sx={{flexGrow:6}}>
            {dataCard(data)}
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}

export default App;
