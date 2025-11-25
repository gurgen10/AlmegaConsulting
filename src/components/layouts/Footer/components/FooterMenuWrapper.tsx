import { Typography } from '@mui/material';
import { FooterLinkHeader } from './Footer.style';

const FooterMenuWrapper = ({ children }: { children: React.ReactNode | string }) => {
  return (
    <FooterLinkHeader
      sx={{
        borderBottomWidth: '1px',
        borderBottomStyle: 'solid',
        borderBottomColor: 'opacityLight.30',
        py: '6px',
        marginBottom: '6px',
        textAlign: 'left',
      }}>
      <Typography color="tertiary.300" variant="body1">
        {children}
      </Typography>
    </FooterLinkHeader>
  );
};

export default FooterMenuWrapper;
