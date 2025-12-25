'use client';

import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { CONTAINER_STYLES, SECTION_STYLES_X } from '@/shared/constants/spacing';
import { useTranslations } from 'next-intl';
import ForbesIcon from '@/components/common/Forbs/ForbesIcon';

export default function Forbs() {
  const t = useTranslations('homePage');
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      component="section"
      sx={{
        ...SECTION_STYLES_X,
        py: 6,
        boxShadow: '0 0 38px 0 rgba(0, 0, 0, 0.25)',
        borderBottom: `1px solid ${theme.palette.grey[25]}`,
        backgroundColor: 'grey.900',
      }}
    >
      <Box {...CONTAINER_STYLES}>
        <Box
          sx={{
            display: 'grid',
            alignItems: 'center',
            gridTemplateColumns: '4fr 1fr',
            columnGap: 6,
            rowGap: 5,
            minHeight: '200px',
            justifyContent: 'space-between',
            [theme.breakpoints.down('sm')]: {
              gridTemplateColumns: '1fr',
            },
          }}
        >
          <Box
            className="quote"
            sx={{
              borderLeft: `1px solid ${theme.palette.grey[25]}`,
              pl: 4,
              py: 2,
              position: 'relative',
              color: theme.palette.grey[900],
              '&:before': {
                content: '""',
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23CEE8E8' d='M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z'/%3E%3C/svg%3E")`,
                backgroundColor: theme.palette.grey[900],
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'contain',
                position: 'absolute',
                width: '31px',
                height: '31px',
                left: '-16.5px',
                top: '50%',
                transform: 'translateY(-50%)',
                padding: '4px',
              },
            }}
          >
            <Typography
              component="h2"
              variant="h4"
              sx={{
                fontWeight: 200,
                color: 'grey.25',
                mb: 4,
              }}
            >
              {t('forbsTitle')}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 300,
                color: 'grey.25',
              }}
            >
              {t('aregAghayants')}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 200,
                color: 'grey.400',
              }}
            >
              {t('aregAghayantsDescription')}
            </Typography>
          </Box>
          <Box
            sx={{
              borderLeft: `1px solid ${theme.palette.grey[25]}`,
              pl: 6,
              py: 2,
              position: 'relative',
              transition: '.2s border ease-in-out',
              color: theme.palette.grey[900],
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Box>
              <ForbesIcon width={isTablet ? 128 : 192} height={isTablet ? 32 : 48} />
            </Box>
            <Typography
              variant="button"
              component="a"
              href="https://www.forbes.com/sites/kolawolesamueladebayo/2025/11/04/can-ai-fix-solars-scalability-problem/"
              target="_blank"
              sx={{
                color: 'tertiary.50',
                textDecoration: 'underline',
                position: 'absolute',
                bottom: 0,
                fontWeight: 500,
                [theme.breakpoints.down('sm')]: {
                  position: 'static',
                },
              }}
            >
              {t('readFullArticle')}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
