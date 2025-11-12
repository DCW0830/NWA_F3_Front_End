import { styled, Button } from '@mui/material';
import { colors } from './colors';

export const PrimaryButton = styled(Button)({
  backgroundColor: colors.primary,
  color: colors.white,
  padding: '12px 32px',
  fontSize: '1rem',
  fontWeight: 600,
  textTransform: 'uppercase',
  borderRadius: 0,
  '&:hover': { backgroundColor: '#b8112f' },
});

export const SecondaryButton = styled(Button)({
  backgroundColor: colors.black,
  color: colors.white,
  padding: '12px 32px',
  fontSize: '1rem',
  fontWeight: 600,
  textTransform: 'uppercase',
  borderRadius: 0,
  '&:hover': { backgroundColor: colors.darkGray },
});

export const OutlineButton = styled(Button)({
  backgroundColor: 'transparent',
  color: colors.primary,
  border: `2px solid ${colors.primary}`,
  padding: '10px 32px',
  fontSize: '1rem',
  fontWeight: 600,
  textTransform: 'uppercase',
  borderRadius: 0,
  '&:hover': { backgroundColor: colors.primary, color: colors.white },
});
