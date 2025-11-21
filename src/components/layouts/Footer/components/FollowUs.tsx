import { Box, Typography } from '@mui/material';
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

  return (
    <Box>
      <Typography variant="body1" marginBottom={2} color="tertiary.300">
        {t('footer.followUs')}
      </Typography>
      <Box>
        <Link href="https://www.youtube.com/@SolarGenixai" target="_blank">
          <Box
            component={'span'}
            sx={{ color: 'grey.25', '&:hover': { color: theme.palette.primary.main } }}>
            <YouTube />
          </Box>
        </Link>
        <Link href="https://www.tiktok.com/@solargenix.ai" target="_blank">
          <Box
            component={'span'}
            sx={{
              ml: 2,
              color: 'grey.25',
              '&:hover': { color: theme.palette.primary.main },
            }}>
            <TikTok />
          </Box>
        </Link>
        <Link href="https://www.instagram.com/solargenix.ai" target="_blank">
          <Box
            component={'span'}
            sx={{
              ml: 2,
              color: 'grey.25',
              '&:hover': { color: theme.palette.primary.main },
            }}>
            <Instagram />
          </Box>
        </Link>
        <Link href="https://www.facebook.com/solargenixai" target="_blank">
          <Box
            component={'span'}
            sx={{
              ml: 2,
              color: 'grey.25',
              '&:hover': { color: theme.palette.primary.main },
            }}>
            <Facebook />
          </Box>
        </Link>
        <Link href="https://www.linkedin.com/company/solargenix-ai/ " target="_blank">
          <Box
            component={'span'}
            sx={{
              ml: 2,
              color: 'grey.25',
              '&:hover': { color: theme.palette.primary.main },
            }}>
            <Linkedin />
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default FollowUs;
