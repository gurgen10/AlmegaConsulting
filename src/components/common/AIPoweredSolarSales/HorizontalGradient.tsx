import { Box } from '@mui/material';

const HorizontalGradient = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        width: '99%',
        height: '80px',
        backgroundImage:
          'linear-gradient(180deg, rgba(250, 250, 250, 0.00) 0%, rgba(250, 250, 250, 0.64) 38.94%, #FAFAFA 87.98%)',
      }}
    ></Box>
  );
};

export default HorizontalGradient;
