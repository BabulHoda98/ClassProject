import { Box, Typography, colors } from '@mui/material'
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import React from 'react'

const Footer = () => {
  return (
    <>
      <Box sx={{ textAlign: "center", bgcolor: "gold", color: 'white', p: 1 }}>
        <Box sx={{ my: 3, "& svg": { fontSize: "60px", cursor: "pointer", mr: 2 }, "& svg:hover": { color: 'green', transform: 'translateX(5px)', transition: 'all 400ms' } }}>
          {/* Icons  */}
          <PhoneEnabledIcon />
          <LocalTaxiIcon />
          <LocationOnIcon />
            <button className='btn'>OUR TARIFFS</button>
        </Box>
        <Typography variant='h5' sx={{ "@media(max-width:600px)": { fontSize: "1rem", } }}>All Rights Reserved &copy; Hoda Tech</Typography>
      </Box>
    </>
  )
}

export default Footer