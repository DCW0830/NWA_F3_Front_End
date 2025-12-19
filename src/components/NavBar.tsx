import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import SearchIcon from '@mui/icons-material/Search';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {
  FlexBox,
  StyledAppBar,
  StyledToolbar,
  NavButton,
  PaxButton,
  NavIconButton,
  SocialIconButton,
  MobileMenuButton,
  MobileMenuContainer,
  MobileMenuText,
  MobileDropdown,
  MobileMenuList,
  MobileMenuItem,
  MobileSubMenu,
  MobilePaxToggle,
  MobileSocialContainer,
  MobileSearchForm,
  MobileSearchInput,
  MobileSearchButton,
  colors,
} from './styled';
import logoHorizontal from '../assets/f3-logo-horizontal.png';

const pages = [
  { name: 'HOME', path: '/' },
  { name: 'ABOUT', path: '/about' },
  { name: 'FOR NEW GUYS', path: '/fng' },
  { name: 'LOCATIONS', path: '/locations' },
  {
    name: 'PAX',
    dropdown: [
      { name: 'F3 Roles Descriptions', path: '/f3-roles-descriptions' },
      { name: 'F3 NWA The Genesis Metrics', path: '/f3-nwa-the-genesis-metrics' },
      { name: 'F3 NWA The Spark Metrics', path: '/f3-nwa-the-spark-metrics' },
      { name: 'F3 NWA Hog Wild Metrics', path: '/f3-nwa-hog-wild-metrics' },
      { name: 'Backblasts Data – Region', path: '/backblasts-data' },
      { name: 'Old BackBlasts', path: '/backblasts' },
    ],
  },
  { name: 'CONTACT', path: '/contact' },
];

export const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [paxOpen, setPaxOpen] = useState(false);
  const [mobilePaxOpen, setMobilePaxOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [mobileSearchValue, setMobileSearchValue] = useState('');

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

  const handleMobileToggle = () => setMobileOpen(!mobileOpen);
  const handleMobileClose = () => {
    setMobileOpen(false);
    setMobilePaxOpen(false);
  };

  const handlePaxEnter = () => setPaxOpen(true);
  const handlePaxLeave = () => setPaxOpen(false);

  const handleSearchToggle = () => {
    setSearchOpen(!searchOpen);
    if (searchOpen) setSearchValue('');
  };

  const handleMobileSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Mobile search:', mobileSearchValue);
    // Implement search functionality here
  };

  return (
    <StyledAppBar position="sticky" className={scrolled ? 'scrolled' : ''}>
      <StyledToolbar disableGutters>
        {/* Desktop & Mobile Logo */}
        <FlexBox component={Link} to="/" sx={{ alignItems: 'center', textDecoration: 'none' }}>
          <img src={logoHorizontal} alt="F3 NorthWest Arkansas" style={{ height: '45px', width: 'auto' }} />
        </FlexBox>

        {/* Desktop Navigation */}
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
                  <Drawer
                    anchor="top"
                    open={paxOpen}
                    onClose={handlePaxLeave}
                    sx={{
                      '& .MuiDrawer-paper': {
                        position: 'absolute',
                        top: '75px',
                        left: 0,
                        right: 0,
                        backgroundColor: colors.navBar,
                        borderRadius: 0,
                        boxShadow: 'none',
                        border: '1px solid rgba(0,0,0,0.1)',
                      },
                    }}
                    ModalProps={{
                      keepMounted: true,
                      disableScrollLock: true,
                    }}
                  >
                    <FlexBox sx={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                      {page.dropdown.map((item) => (
                        <MobileMenuItem key={item.name}>
                          <Link to={item.path} onClick={handlePaxLeave}>
                            {item.name}
                          </Link>
                        </MobileMenuItem>
                      ))}
                    </FlexBox>
                  </Drawer>
                </FlexBox>
              ) : (
                <NavButton key={page.name} component={Link} to={page.path}>
                  {page.name}
                </NavButton>
              )
            )}

          {searchOpen ? (
            <>
              <MobileSearchInput
                autoFocus
                placeholder="Search..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                style={{ width: '300px' }}
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

        {/* Mobile Menu Button */}
        <MobileMenuContainer sx={{ display: { xs: 'flex', md: 'none' }, marginLeft: 'auto' }}>
          <MobileMenuButton onClick={handleMobileToggle}>
            <MenuIcon />
          </MobileMenuButton>
          <MobileMenuText>MENU</MobileMenuText>
        </MobileMenuContainer>
      </StyledToolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleMobileClose}
        sx={{
          '& .MuiDrawer-paper': {
            width: '100%',
            backgroundColor: colors.navBar,
          },
        }}
      >
        <MobileDropdown>
          {/* Close Button */}
          <FlexBox sx={{ justifyContent: 'flex-end', padding: '1rem 2rem' }}>
            <MobileMenuButton onClick={handleMobileClose}>
              <CloseIcon />
            </MobileMenuButton>
          </FlexBox>

          {/* Menu Items */}
          <MobileMenuList>
            {pages.map((page) =>
              page.dropdown ? (
                <React.Fragment key={page.name}>
                  <MobilePaxToggle onClick={() => setMobilePaxOpen(!mobilePaxOpen)}>
                    <span>{page.name}</span>
                    {mobilePaxOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </MobilePaxToggle>
                  {mobilePaxOpen && (
                    <MobileSubMenu>
                      {page.dropdown.map((item) => (
                        <MobileMenuItem key={item.name}>
                          <Link to={item.path} onClick={handleMobileClose}>
                            {item.name}
                          </Link>
                        </MobileMenuItem>
                      ))}
                    </MobileSubMenu>
                  )}
                </React.Fragment>
              ) : (
                <MobileMenuItem key={page.name}>
                  <Link to={page.path} onClick={handleMobileClose}>
                    {page.name}
                  </Link>
                </MobileMenuItem>
              )
            )}
          </MobileMenuList>

          {/* Social Icons */}
          <MobileSocialContainer>
            <SocialIconButton component="a" href="https://x.com/f3nwarkansas" target="_blank">
              <TwitterIcon />
            </SocialIconButton>
            <SocialIconButton component="a" href="https://www.facebook.com/F3NWArkansas/" target="_blank">
              <FacebookIcon />
            </SocialIconButton>
            <SocialIconButton component="a" href="https://www.instagram.com/f3nwarkansas/" target="_blank">
              <InstagramIcon />
            </SocialIconButton>
          </MobileSocialContainer>

          {/* Search Form */}
          <MobileSearchForm onSubmit={handleMobileSearch}>
            <MobileSearchInput
              type="search"
              placeholder="Search"
              value={mobileSearchValue}
              onChange={(e) => setMobileSearchValue(e.target.value)}
            />
            <MobileSearchButton type="submit">
              <SearchIcon />
            </MobileSearchButton>
          </MobileSearchForm>
        </MobileDropdown>
      </Drawer>
    </StyledAppBar>
  );
};
