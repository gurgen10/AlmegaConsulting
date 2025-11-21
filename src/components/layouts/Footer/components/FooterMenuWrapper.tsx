import { Box, Typography } from '@mui/material';

const FooterMenuWrapper = ({ children }: { children: React.ReactNode | string }) => {
  return (
    <Box
      sx={{
        borderBottomWidth: '1px',
        borderBottomStyle: 'solid',
        borderBottomColor: 'opacityLight.30',
        py: '6px',
        marginBottom: '6px',
      }}>
      <Typography color="tertiary.300" variant="body1">
        {children}
      </Typography>
    </Box>
  );
};

export default FooterMenuWrapper;
