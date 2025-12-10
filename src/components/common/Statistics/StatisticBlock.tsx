import { Box, Typography } from '@mui/material';

const StatisticBlock = ({ label, value }: { label: string; value: string }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        '&::before': {
          content: "''",
          position: 'absolute',
          top: 0,
          left: 0,
          width: '32px',
          height: '1px',
          backgroundColor: 'secondary.300',
        },
      }}
    >
      <Typography
        component="h4"
        variant="h3"
        sx={{
          mb: 1,
          fontWeight: 700,
          color: 'secondary.light',
          height: '58px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {value}
      </Typography>
      <Typography variant="subtitle1" color={'grey.25'} fontWeight={300} textAlign="left">
        {label}
      </Typography>
    </Box>
  );
};

export default StatisticBlock;
