import React, { useCallback } from 'react'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Twitter from '@mui/icons-material/Twitter'
import YouTube from '@mui/icons-material/YouTube'
import Facebook from '@mui/icons-material/Facebook'
import Instagram from '@mui/icons-material/Instagram'
import LinkedIn from '@mui/icons-material/LinkedIn'
import Container from '@mui/material/Container'

const Footer = () => {
  const handleOpenNavMenu = useCallback(
    link => () => {
      window.open(`https://www.${link}.com`, '_blank')
    },
    [],
  )

  return (
    <footer>
      <Container
        sx={{
          backgroundColor: '#1976d2',
          color: '#FFFFFF',
        }}
        maxWidth="xl">
        <Box sx={{ height: '75px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography>@2022 App. All rights reserved</Typography>
          <Box>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu('twitter')}
              color="inherit">
              <Twitter />
            </IconButton>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu('facebook')}
              color="inherit">
              <Facebook />
            </IconButton>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu('youtube')}
              color="inherit">
              <YouTube />
            </IconButton>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu('instagram')}
              color="inherit">
              <Instagram />
            </IconButton>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu('linkedin')}
              color="inherit">
              <LinkedIn />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </footer>
  )
}
export default Footer
