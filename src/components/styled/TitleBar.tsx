import { styled, Box } from '@mui/material';
import { colors } from './colors';

export const TitleBarContainer = styled(Box)({
  backgroundColor: colors.navBar,
  height: '57px',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
});

export const TitleBarContent = styled(Box)({
  maxWidth: '1200px',
  width: '100%',
  margin: '0 auto',
  padding: '0 2rem',
});

export const PageTitle = styled('h1')({
  color: colors.white,
  fontFamily: 'Play, sans-serif',
  fontSize: '24px',
  fontWeight: 400,
  textTransform: 'uppercase',
  margin: 0,
  lineHeight: 1,
});
