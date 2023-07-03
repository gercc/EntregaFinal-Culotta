import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom';

const pages = ['Inicio', 'Smartphones', 'Notebooks', 'Audio', 'Tv', 'Heladeras'];

const pageRoutes = {
  Inicio: '/',
  Smartphones: '/product-category/smartphones',
  Notebooks: '/product-category/notebooks',
  Audio: '/product-category/audio',
  Tv: '/product-category/smarttv',
  Heladeras: '/product-category/heladeras'
};


function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" style={{backgroundColor: "#928C8B"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontSize: '2rem',
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >

            Tiki Store
            
            
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link to={pageRoutes[page]} style={{ textDecoration: 'none', color: 'black'}}>
                    {page}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            
            Tiki Store
            
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'}, justifyContent: 'center' }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, mx: 3, color: 'white', display: 'block'}}
              >
                <Link to={pageRoutes[page]} style={{ textDecoration: 'none', color: 'white', fontSize: '14px', letterSpacing: '.2rem' }}>
                    {page}
                </Link>
              </Button>
            ))}
          </Box>
          <CartWidget />
        </Toolbar>
      </Container>
    </AppBar>
    
  );
}
export default ResponsiveAppBar;