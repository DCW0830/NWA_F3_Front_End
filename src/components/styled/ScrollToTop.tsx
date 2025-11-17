import { styled } from '@mui/material';
import { colors } from './colors';

export const ScrollToTopButton = styled('button')({
  position: 'fixed',
  bottom: '2rem',
  right: '2rem',
  backgroundColor: '#263036',
  border: 'none',
  color: '#708e9f',
  cursor: 'pointer',
  width: '50px',
  height: '50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '4px',
  transition: 'color 0.2s, opacity 0.3s',
  zIndex: 1000,
  '&:hover': { color: colors.hoverGreen },
  '& svg': { fontSize: '28px' },
});
