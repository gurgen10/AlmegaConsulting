import { Box } from '@mui/material';

export default function GradientDivider() {
  return (
    <Box
      height="1px"
      sx={{ background: 'linear-gradient(90deg, #FAFAFA 0%, #96B0B0 50.15%, #FAFAFA 100%)' }}
    />
  );
}
