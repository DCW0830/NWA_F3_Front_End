import { colors } from './colors';
import {
  styled,
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  ButtonProps,
  IconButtonProps,
  TextField,
} from '@mui/material';

export const MobileMenuButton = styled(IconButton)({ color: colors.white });

export const StyledAppBar = styled(AppBar)({
  backgroundColor: colors.navBar,
  boxShadow: 'none',
  transition: 'background-color 0.3s ease',
  '&.scrolled': { backgroundColor: 'rgba(46, 59, 66, 0.8)', backdropFilter: 'blur(10px)' },
  borderBottom: '1px gray solid',
});

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: '75px',
  maxWidth: '1200px',
  width: '100%',
  margin: '0 auto',
  padding: '0 2rem',
  [theme.breakpoints.up('sm')]: { minHeight: '75px' },
}));

export const NavButton = styled(Button)<ButtonProps & { to?: string }>({
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
  cursor: 'pointer',
  '&:hover': { color: colors.hoverGreen, backgroundColor: 'transparent' },
});

export const PaxButton = styled(Box)({
  margin: '1rem 0',
  color: colors.white,
  display: 'flex',
  alignItems: 'center',
  padding: '0 1rem',
  fontFamily: 'Play, sans-serif',
  fontSize: '12px',
  fontWeight: 400,
  textTransform: 'uppercase',
  cursor: 'pointer',
  transition: 'color 0.2s',
  '&:hover': { color: colors.hoverGreen },
  '& svg': { marginLeft: '4px' },
});

export const NavIconButton = styled(IconButton)({
  color: colors.white,
  marginLeft: '1rem',
  '& svg': { fontSize: '18px' },
  '&:hover': { color: colors.hoverGreen, backgroundColor: 'transparent' },
});

export const SocialIconButton = styled(IconButton)<IconButtonProps & { href?: string; target?: string }>({
  color: colors.white,
  marginLeft: '16px',
  '& svg': { fontSize: '25px' },
  '&:hover': { color: colors.hoverGreen, backgroundColor: 'transparent' },
});

export const SearchInput = styled(TextField)({
  '& .MuiInputBase-root': { color: colors.white, fontFamily: 'Play, sans-serif', fontSize: '14px' },
  '& .MuiOutlinedInput-notchedOutline': { borderColor: colors.white },
  '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: colors.hoverGreen },
  '& .Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: colors.hoverGreen },
  '& .MuiInputBase-input': { padding: '8px 12px' },
});

export const MobileMenuContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
});

export const MobileMenuText = styled(Box)({
  color: colors.white,
  fontFamily: 'Play',
  fontSize: '14px',
  fontWeight: 600,
});

export const MobileDropdown = styled(Box)({
  backgroundColor: colors.navBar,
  width: '100%',
  padding: '1rem 0',
});

export const MobileMenuList = styled('ul')({
  listStyle: 'none',
  margin: 0,
  padding: 0,
});

export const MobileMenuItem = styled('li')({
  '& a': {
    display: 'block',
    color: colors.white,
    textDecoration: 'none',
    padding: '0.75rem 2rem',
    fontFamily: 'Play',
    fontSize: '14px',
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.05)',
    },
  },
});

export const MobileSubMenu = styled('ul')({
  listStyle: 'none',
  margin: 0,
  padding: 0,
  backgroundColor: 'rgba(0,0,0,0.2)',
  '& li a': {
    paddingLeft: '3rem',
  },
});

export const MobilePaxToggle = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: colors.white,
  padding: '0.75rem 2rem',
  cursor: 'pointer',
  fontFamily: 'Play',
  fontSize: '14px',
  '&:hover': {
    backgroundColor: 'rgba(255,255,255,0.05)',
  },
});

export const MobileSocialContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  gap: '1rem',
  padding: '1rem 2rem',
  borderTop: '1px solid rgba(255,255,255,0.1)',
  borderBottom: '1px solid rgba(255,255,255,0.1)',
});

export const MobileSearchForm = styled('form')({
  padding: '1rem 2rem',
  display: 'flex',
  gap: '0.5rem',
});

export const MobileSearchInput = styled('input')({
  flex: 1,
  padding: '0.5rem',
  backgroundColor: 'rgba(255,255,255,0.1)',
  border: '1px solid rgba(255,255,255,0.2)',
  borderRadius: '4px',
  color: colors.white,
  fontFamily: 'Play',
  fontSize: '14px',
  '&::placeholder': {
    color: 'rgba(255,255,255,0.5)',
  },
  '&:focus': {
    outline: 'none',
    borderColor: colors.hoverGreen,
  },
});

export const MobileSearchButton = styled('button')({
  backgroundColor: colors.primary,
  border: 'none',
  color: colors.white,
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': {
    backgroundColor: '#b8112f',
  },
});
