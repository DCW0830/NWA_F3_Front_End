import { styled, AppBar, Toolbar, Box, Button, IconButton, ButtonProps } from '@mui/material';
import { colors } from './colors';

export const StyledAppBar = styled(AppBar)({
  backgroundColor: colors.navBar,
  boxShadow: 'none',
  left: 0,
  right: 0,
  width: '100%',
  padding: 0,
  margin: 0,
  transition: 'background-color 0.3s ease',
  '&.scrolled': {
    backgroundColor: 'rgba(46, 59, 66, 0.8)',
    backdropFilter: 'blur(10px)',
  },
});

export const StyledToolbar = styled(Toolbar)({
  minHeight: '70px',
  maxWidth: '1200px',
  width: '100%',
  margin: '0 auto',
  padding: '0 2rem',
});

export const LogoBox = styled(Box)({
  width: 50,
  height: 50,
  backgroundColor: colors.primary,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '1rem',
  fontWeight: 900,
  fontSize: '1.5rem',
});

export const BrandText = styled(Box)({
  fontWeight: 700,
  fontSize: '1.3rem',
  letterSpacing: '0.5px',
});

export const NavButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'active',
})<ButtonProps & { active?: boolean; to?: string }>(() => ({
  margin: '1rem 0',
  color: colors.white,
  display: 'block',
  padding: '0 1rem',
  fontFamily: 'Play, sans-serif',
  fontSize: '12px',
  fontWeight: 400,
  textTransform: 'uppercase',
  borderBottom: 'none',
  borderRadius: 0,
  '&:hover': {
    color: colors.hoverGreen,
    backgroundColor: 'transparent',
  },
}));

export const PaxButton = styled(Button)({
  margin: '1rem 0',
  color: colors.white,
  display: 'flex',
  padding: '0 1rem',
  fontFamily: 'Play, sans-serif',
  fontSize: '12px',
  fontWeight: 400,
  textTransform: 'uppercase',
  borderBottom: 'none',
  borderRadius: 0,
  '& .MuiButton-endIcon': {
    marginLeft: '4px',
  },
  '&:hover': {
    color: colors.hoverGreen,
    backgroundColor: 'transparent',
  },
});

export const MobileMenuButton = styled(IconButton)({
  color: colors.white,
});
