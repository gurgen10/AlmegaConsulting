import { Typography } from '@mui/material';
import { FooterLinkHeader } from './Footer.style';

const FooterMenuWrapper = ({ children }: { children: React.ReactNode | string }) => {
  return (
    <FooterLinkHeader>
      <Typography color="tertiary.300" variant="body1">
        {children}
      </Typography>
    </FooterLinkHeader>
  );
};

export default FooterMenuWrapper;
