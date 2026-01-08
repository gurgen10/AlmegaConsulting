import { Box } from '@mui/material';

export default function GradientDivider() {
  return (
    <Box
      sx={{
        borderTop: '1px solid',
        borderImage: 'linear-gradient(90deg, #FAFAFA 0%, #96B0B0 50.15%, #FAFAFA 100%) 1',
      }}
    />
  );
}
