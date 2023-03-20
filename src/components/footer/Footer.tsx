import { Box, Typography } from "@mui/material"
import React from "react"
import format from 'date-fns/format'
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <Box
      padding={"20px"}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItmes: "center",
        backgroundColor: "#2E0656",
        color: "white",
      }}
    >
      <Typography>© {format(new Date(), "yyyy")} James comunity. All Right Reserved.</Typography>
      <Box sx={{ display: 'flex', gap: '15px' }}>
        <TelegramIcon sx={{ cursor: 'pointer' }} />
        <InstagramIcon sx={{ cursor: 'pointer' }} />
        <YouTubeIcon sx={{ cursor: 'pointer' }} />
      </Box>
    </Box>
  )
}

export default Footer
