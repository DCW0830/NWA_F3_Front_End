// src/components/styled/Hero.tsx
import { styled, Box } from '@mui/material';
import { colors } from './colors';

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
  padding: '4rem 2rem',
});

export const HeroOverlay = styled(Box)({
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
});

export const HeroTitle = styled('h2')({
  fontSize: '3rem',
  fontWeight: 700,
  marginBottom: '1.5rem',
  color: colors.white,
  fontFamily: 'Play',
  '@media (max-width: 768px)': {
    fontSize: '2rem',
  },
});

export const HeroText = styled('p')({
  fontSize: '1.25rem',
  lineHeight: 1.6,
  marginBottom: '2rem',
  color: colors.white,
  fontFamily: 'Play',
});

export const HeroButtons = styled(Box)({
  display: 'flex',
  gap: '1rem',
  justifyContent: 'center',
  flexWrap: 'wrap',
});

export const HeroButton = styled('a')({
  backgroundColor: colors.primary,
  color: colors.white,
  padding: '0.75rem 2rem',
  textDecoration: 'none',
  fontFamily: 'Play',
  fontSize: '1rem',
  fontWeight: 600,
  textTransform: 'uppercase',
  borderRadius: '4px',
  transition: 'background-color 0.2s',
  display: 'inline-block',
  '&:hover': {
    backgroundColor: '#b8112f',
  },
});
