import { styled, Card, CardContent } from '@mui/material';

export const StyledCard = styled(Card)({
  borderRadius: 0,
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  transition: 'transform 0.2s, box-shadow 0.2s',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
  },
});

export const ImageCard = styled(StyledCard)({
  overflow: 'hidden',
  '& img': {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
});

export const InfoCard = styled(StyledCard)({
  padding: '2rem',
  textAlign: 'center',
});

export const StyledCardContent = styled(CardContent)({
  padding: '1.5rem',
  '&:last-child': { paddingBottom: '1.5rem' },
});
