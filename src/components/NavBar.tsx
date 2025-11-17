// src/components/NavBar.tsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import {
  FlexBox,
  StyledAppBar,
  StyledToolbar,
  NavButton,
  PaxButton,
  NavIconButton,
  SocialIconButton,
  MobileMenuButton,
  SearchInput,
  colors,
} from './styled';
import logoHorizontal from '../assets/f3-logo-horizontal.png';
import logoSquare from '../assets/f3-logo-square.jpeg';

const pages = [
  { name: 'HOME', path: '/' },
  { name: 'ABOUT', path: '/about' },
  { name: 'FOR NEW GUYS', path: '/fng' },
  { name: 'LOCATIONS', path: '/locations' },
  {
    name: 'PAX',
    dropdown: [
      { name: 'F3 ROLES DESCRIPTIONS', path: '/f3-roles-descriptions' },
      { name: 'F3 NWA THE GENSIS METRICS', path: '/f3-nwa-the-genesis-metrics' },
      { name: 'F3 NWA THE SPARK METRICS', path: '/f3-nwa-the-spark-metrics' },
      { name: 'F3 NWA HOG WILD METRICS', path: '/f3-nwa-hog-wild-metrics' },
      { name: 'BACKBLASTS DATA - REGION', path: '/backblasts-data' },
      { name: 'OLD BACKBLASTS', path: '/backblasts' },
    ],
  },
  { name: 'CONTACT', path: '/contact' },
];

export const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [paxOpen, setPaxOpen] = useState(false);
  const [paxAnchor, setPaxAnchor] = useState<null | HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && searchOpen) {
        setSearchOpen(false);
        setSearchValue('');
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [searchOpen]);

  const handleOpenNavMenu = (e: React.MouseEvent<HTMLElement>) => setAnchorElNav(e.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  const handlePaxEnter = (e: React.MouseEvent<HTMLElement>) => {
    setPaxAnchor(e.currentTarget);
    setPaxOpen(true);
  };

  const handlePaxLeave = () => setPaxOpen(false);

  const handleSearchToggle = () => {
    setSearchOpen(!searchOpen);
    if (searchOpen) setSearchValue('');
  };

  return (
    <StyledAppBar position="sticky" className={scrolled ? 'scrolled' : ''}>
      <StyledToolbar disableGutters>
        <FlexBox
          component={Link}
          to="/"
          sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', textDecoration: 'none' }}
        >
          <img src={logoHorizontal} alt="F3 NorthWest Arkansas" style={{ height: '50px', width: 'auto' }} />
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

        <FlexBox
          component={Link}
          to="/"
          sx={{ mr: 2, display: { xs: 'flex', md: 'none' }, flexGrow: 1, textDecoration: 'none' }}
        >
          <img src={logoSquare} alt="F3 NWA" style={{ height: '40px', width: 'auto' }} />
        </FlexBox>

        <FlexBox
          sx={{
            flexGrow: 1,
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'flex-end',
            gap: 0.5,
            alignItems: 'center',
          }}
        >
          {!searchOpen &&
            pages.map((page) =>
              page.dropdown ? (
                <FlexBox key={page.name} onMouseEnter={handlePaxEnter} onMouseLeave={handlePaxLeave}>
                  <PaxButton>
                    {page.name}
                    <ArrowDropDownIcon />
                  </PaxButton>
                  <Menu
                    anchorEl={paxAnchor}
                    open={paxOpen}
                    onClose={() => {}}
                    disableAutoFocusItem
                    slotProps={{
                      paper: {
                        sx: {
                          borderRadius: 0,
                          marginTop: '0px',
                          boxShadow: 'none',
                          border: '1px solid rgba(0,0,0,0.1)',
                          pointerEvents: 'auto',
                          '& .MuiList-root': { py: 0 },
                        },
                      },
                    }}
                    sx={{ pointerEvents: 'none' }}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                  >
                    {page.dropdown.map((item) => (
                      <MenuItem
                        key={item.name}
                        component={Link}
                        to={item.path}
                        onClick={handlePaxLeave}
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

          {searchOpen ? (
            <>
              <SearchInput
                autoFocus
                size="small"
                placeholder="Search..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                sx={{ width: '300px' }}
              />
              <NavIconButton onClick={handleSearchToggle}>
                <CloseIcon />
              </NavIconButton>
            </>
          ) : (
            <>
              <NavIconButton onClick={handleSearchToggle}>
                <SearchIcon />
              </NavIconButton>

              <SocialIconButton component="a" href="https://x.com/f3nwarkansas" target="_blank">
                <TwitterIcon />
              </SocialIconButton>

              <SocialIconButton component="a" href="https://www.facebook.com/F3NWArkansas/" target="_blank">
                <FacebookIcon />
              </SocialIconButton>

              <SocialIconButton component="a" href="https://www.instagram.com/f3nwarkansas/" target="_blank">
                <InstagramIcon />
              </SocialIconButton>
            </>
          )}
        </FlexBox>
      </StyledToolbar>
    </StyledAppBar>
  );
};
