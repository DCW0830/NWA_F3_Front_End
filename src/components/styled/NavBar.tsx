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
  left: 0,
  right: 0,
  width: '100%',
  padding: 0,
  margin: 0,
  transition: 'background-color 0.3s ease',
  '&.scrolled': { backgroundColor: 'rgba(46, 59, 66, 0.8)', backdropFilter: 'blur(10px)' },
});

export const StyledToolbar = styled(Toolbar)({
  minHeight: '70px',
  maxWidth: '1200px',
  width: '100%',
  margin: '0 auto',
  padding: '0 2rem',
});

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
