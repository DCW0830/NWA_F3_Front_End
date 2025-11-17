import { styled, Box } from '@mui/material';
import { colors } from './colors';

export const FooterContainer = styled('footer')({
  width: '100%',
  marginTop: 'auto',
});

export const FooterMain = styled(Box)({
  backgroundColor: colors.navBar,
  width: '100%',
  padding: '3rem 0 2rem',
});

export const FooterInner = styled(Box)({
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 2rem',
});

export const FooterContent = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
});

export const FooterLogo = styled('img')({
  width: '200px',
  height: '55px',
});

export const FooterEmail = styled(Box)({
  color: '#708e9f',
  fontFamily: 'Play, sans-serif',
  fontSize: '14px',
  '& a': {
    color: '#708e9f',
    textDecoration: 'none',
    '&:hover': { color: colors.hoverGreen },
  },
});

export const FooterSocial = styled(Box)({
  display: 'flex',
  gap: '0.5rem',
  marginTop: '0.5rem',
});

export const FooterSocialButton = styled('a')({
  backgroundColor: '#263036',
  color: '#708e9f',
  width: '40px',
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
  transition: 'color 0.2s',
  '&:hover': { color: colors.hoverGreen },
  '& svg': { fontSize: '20px' },
});

export const CopyrightBar = styled(Box)({
  backgroundColor: '#263036',
  width: '100%',
  height: '41px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#708e9f',
  fontFamily: 'Play',
  fontSize: '12px',
  fontWeight: '600',
});
