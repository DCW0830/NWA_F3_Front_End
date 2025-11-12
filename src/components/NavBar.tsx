// src/components/NavBar.tsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {
  FlexBox,
  StyledAppBar,
  StyledToolbar,
  LogoBox,
  BrandText,
  NavButton,
  PaxButton,
  MobileMenuButton,
  colors,
} from './styled';

const pages = [
  { name: 'HOME', path: '/' },
  { name: 'ABOUT', path: '/about' },
  { name: 'FOR NEW GUYS', path: '/fng' },
  { name: 'LOCATIONS', path: '/locations' },
  {
    name: 'PAX',
    path: '/pax',
    dropdown: [
      { name: 'PAX Directory', path: '/pax/directory' },
      { name: 'Q School', path: '/pax/qschool' },
      { name: 'Leadership', path: '/pax/leadership' },
    ],
  },
  { name: 'CONTACT', path: '/contact' },
];

export const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElPax, setAnchorElPax] = useState<null | HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenNavMenu = (e: React.MouseEvent<HTMLElement>) => setAnchorElNav(e.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleOpenPaxMenu = (e: React.MouseEvent<HTMLElement>) => setAnchorElPax(e.currentTarget);
  const handleClosePaxMenu = () => setAnchorElPax(null);

  return (
    <StyledAppBar position="sticky" className={scrolled ? 'scrolled' : ''}>
      <StyledToolbar disableGutters>
        <FlexBox
          component={Link}
          to="/"
          sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', textDecoration: 'none', color: 'inherit' }}
        >
          <LogoBox>F3</LogoBox>
          <BrandText>Northwest Arkansas</BrandText>
        </FlexBox>

        <FlexBox sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <MobileMenuButton size="large" onClick={handleOpenNavMenu}>
            <MenuIcon />
          </MobileMenuButton>
          <Menu
            anchorEl={anchorElNav}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            {pages.map((page) => (
              <MenuItem key={page.name} onClick={handleCloseNavMenu} component={Link} to={page.path}>
                <Typography>{page.name}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </FlexBox>

        <Typography
          variant="h6"
          noWrap
          component={Link}
          to="/"
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontWeight: 700,
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          F3 NWA
        </Typography>

        <FlexBox sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', gap: 0.5 }}>
          {pages.map((page) =>
            page.dropdown ? (
              <FlexBox key={page.name} onMouseEnter={handleOpenPaxMenu} onMouseLeave={handleClosePaxMenu}>
                <PaxButton endIcon={<ArrowDropDownIcon />}>{page.name}</PaxButton>
                <Menu
                  anchorEl={anchorElPax}
                  open={Boolean(anchorElPax)}
                  onClose={handleClosePaxMenu}
                  MenuListProps={{ onMouseLeave: handleClosePaxMenu }}
                  slotProps={{
                    paper: {
                      sx: {
                        borderRadius: 0,
                        marginTop: 0,
                        '& .MuiList-root': { py: 0 },
                      },
                    },
                  }}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                  transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                >
                  {page.dropdown.map((item) => (
                    <MenuItem
                      key={item.name}
                      component={Link}
                      to={item.path}
                      onClick={handleClosePaxMenu}
                      sx={{
                        py: 1.5,
                        px: 3,
                        fontFamily: 'Play, sans-serif',
                        fontSize: '12px',
                        '&:hover': { color: colors.hoverGreen },
                      }}
                    >
                      {item.name}
                    </MenuItem>
                  ))}
                </Menu>
              </FlexBox>
            ) : (
              <NavButton key={page.name} component={Link} to={page.path}>
                {page.name}
              </NavButton>
            )
          )}
        </FlexBox>
      </StyledToolbar>
    </StyledAppBar>
  );
};
