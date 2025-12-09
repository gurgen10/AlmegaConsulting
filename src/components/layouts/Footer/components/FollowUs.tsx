import { Box, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import YouTube from '@/components/common/Icons/YouTube';
import TikTok from '@/components/common/Icons/TikTok';
import Instagram from '@/components/common/Icons/Instagram';
import Facebook from '@/components/common/Icons/Facebook';
import Linkedin from '@/components/common/Icons/Linkedin';
import { useTranslations } from 'next-intl';
import { useTheme } from '@mui/material/styles';

const FollowUs = () => {
  const t = useTranslations();
  const theme = useTheme();
  const followUsLinks = [
    {
      href: 'https://www.youtube.com/@SolarGenixai',
      icon: <YouTube />,
    },
    {
      href: 'https://www.tiktok.com/@solargenix.ai',
      icon: <TikTok />,
    },
    {
      href: 'https://www.instagram.com/solargenix.ai',
      icon: <Instagram />,
    },
    {
      href: 'https://www.facebook.com/solargenixai',
      icon: <Facebook />,
    },
    {
      href: 'https://www.linkedin.com/company/solargenix-ai/ ',
      icon: <Linkedin />,
    },
  ];

  return (
    <Box>
      <Typography variant="body1" marginBottom={2} color="tertiary.300">
        {t('footer.followUs')}
      </Typography>
      <Stack direction="row" gap={2}>
        {followUsLinks.map(link => (
          <Link key={link.href} href={link.href} target="_blank">
            <Box
              component={'span'}
              sx={{ color: 'grey.25', '&:hover': { color: theme.palette.primary.main } }}
            >
              {link.icon}
            </Box>
          </Link>
        ))}
      </Stack>
    </Box>
  );
};

export default FollowUs;
