import { styled, Box, BoxProps } from '@mui/material';

export const FlexBox = styled(Box)<BoxProps & { to?: string }>({ display: 'flex' });
export const FlexRow = styled(FlexBox)({ flexDirection: 'row' });
export const FlexColumn = styled(FlexBox)({ flexDirection: 'column' });
export const FlexCenter = styled(FlexBox)({ justifyContent: 'center', alignItems: 'center' });
export const FlexBetween = styled(FlexBox)({ justifyContent: 'space-between', alignItems: 'center' });
export const Container = styled(Box)(({ theme }) => ({
  maxWidth: '1200px',
  margin: '0 auto',
  padding: theme.spacing(0, 2),
  [theme.breakpoints.up('md')]: { padding: theme.spacing(0, 4) },
}));

export const Section = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6, 0),
  [theme.breakpoints.up('md')]: { padding: theme.spacing(10, 0) },
}));
