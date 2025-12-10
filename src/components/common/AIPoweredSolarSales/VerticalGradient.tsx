import { Box } from '@mui/material';

const VerticalGradient = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        zIndex: 1,
        bottom: 0,
        right: 0,
        width: {
          xs: '32px',
          lg: '80px',
        },
        height: '100%',
        background:
          'linear-gradient(180deg, rgba(250, 250, 250, 0.00) 0%, rgba(250, 250, 250, 0.64) 20%, #FAFAFA 87.98%)',
      }}
    ></Box>
  );
};

export default VerticalGradient;
