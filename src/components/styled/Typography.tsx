import { styled, Typography } from '@mui/material';
import { colors } from './colors';

export const Heading1 = styled(Typography)({
  fontSize: '3rem',
  fontWeight: 700,
  color: colors.text.primary,
  marginBottom: '1rem',
});

export const Heading2 = styled(Typography)({
  fontSize: '2.5rem',
  fontWeight: 700,
  color: colors.text.primary,
  marginBottom: '1rem',
});

export const Heading3 = styled(Typography)({
  fontSize: '2rem',
  fontWeight: 600,
  color: colors.text.primary,
  marginBottom: '0.75rem',
});

export const Heading4 = styled(Typography)({
  fontSize: '1.5rem',
  fontWeight: 600,
  color: colors.text.primary,
  marginBottom: '0.5rem',
});

export const BodyText = styled(Typography)({
  fontSize: '1rem',
  lineHeight: 1.6,
  color: colors.text.secondary,
});

export const LargeText = styled(Typography)({
  fontSize: '1.25rem',
  lineHeight: 1.6,
  color: colors.text.secondary,
});

export const SmallText = styled(Typography)({
  fontSize: '0.875rem',
  color: colors.text.secondary,
});
