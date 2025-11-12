import { styled, Box } from '@mui/material';
import { colors } from './colors';

export const PageWrapper = styled(Box)({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
});

export const MainContent = styled(Box)({ flex: 1 });

export const HeroSection = styled(Box)({
  minHeight: '500px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
  color: colors.white,
  textAlign: 'center',
});

export const Overlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 1,
});

export const HeroContent = styled(Box)({
  position: 'relative',
  zIndex: 2,
  maxWidth: '800px',
  padding: '0 2rem',
});
