'use client';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Link as MuiLink,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useMemo, useState } from 'react';
import ArrowRight from '@/components/common/Icons/ArrowRight';
import { menuItems } from '@/components/layouts/Header/Header.constants';
import { REGISTER_URL } from '@/shared/constants/common';

export default function MenuMobile() {
  const pathname = usePathname();
  const t = useTranslations('header');
  const [expandedKey, setExpandedKey] = useState<string | false>(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const activeItem = useMemo(() => {
    const activeMenuItem = menuItems.find(
      item => pathname === item.url || (item.url !== '/' && pathname.startsWith(item.url))
    );

    return activeMenuItem ? activeMenuItem.key : '/';
  }, [pathname]);

  return (
    <Box
      component="nav"
      sx={{
        width: '100%',
        height: 'calc(100vh - 68px)',
        position: 'relative',
        display: 'flex',
        backgroundColor: 'opacityLight.90',
        padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
        flexDirection: 'column',
      }}
    >
      <Stack
        mb={3}
        sx={{
          overflowY: 'auto',
          flex: 1,
          pb: '120px',
          mt: '62px',
          backdropFilter: 'blur(10px) saturate(120%)',
          WebkitBackdropFilter: 'blur(10px) saturate(120%)',
          '& .MuiBox-root:last-child': {
            borderBottom: 'none',
          },
        }}
      >
        {menuItems.map(item => {
          const isActive = activeItem === item.key;
          const link = (
            <MuiLink
              key={item.key}
              sx={{
                padding: '6px 8px',
                display: 'block',
                color: isActive ? 'primary.500' : 'opacityDark.90',
                position: 'relative',
                cursor: 'pointer',
              }}
              underline="none"
              variant="button"
              component={item.submenuItems?.length ? 'span' : 'a'}
              href={item.url}
              className={isActive ? 'active' : ''}
            >
              {t(item.key)}
            </MuiLink>
          );

          return item.submenuItems?.length ? (
            <Accordion
              key={item.key}
              expanded={expandedKey === item.key}
              onChange={(_, isExpanded) => setExpandedKey(isExpanded ? item.key : false)}
              sx={{
                backgroundColor: 'transparent',
                border: 'none',
                boxShadow: 'none',
                padding: 0,
                borderBottom: `1px solid ${theme.palette.opacityDark[20]}`,
                '&.MuiAccordion-root.Mui-expanded': {
                  margin: 0,
                },
                '& .MuiAccordionSummary-expandIconWrapper': {
                  transform: 'rotate(90deg)',
                },
                '&.Mui-expanded .MuiAccordionSummary-expandIconWrapper': {
                  transform: 'rotate(-90deg)',
                },
                '&.MuiPaper-root::before': {
                  content: "''",
                  height: 0,
                },
                '& .MuiButtonBase-root': {
                  pt: 2,
                  px: 0,
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ArrowRight />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{
                  marginLeft: 0,
                  py: 2,
                  '& .MuiAccordionSummary-content': {
                    margin: 0,
                  },
                }}
              >
                <Typography component="span" variant="button">
                  {link}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 0 }}>
                <Box sx={{ px: isMobile ? 1 : 2, textAlign: 'left' }}>
                  {item.submenuItems?.map(subItem => (
                    <Box
                      key={subItem.key}
                      sx={{
                        '&:not(:last-child)': {
                          borderBottom: theme => `1px solid ${theme.palette.divider}`,
                        },
                      }}
                    >
                      <MuiLink
                        href={subItem.url}
                        sx={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          pt: 2,
                          pb: '26px',
                          textDecoration: 'none',
                          color: 'grey.900',
                          '&:hover': {
                            '& .MuiTypography-h6': {
                              color: 'primary.main',
                            },
                          },
                        }}
                      >
                        {subItem.icon && (
                          <Box sx={{ mr: 2, mt: 0.5 }}>
                            <Image
                              src={subItem.icon}
                              alt={subItem.title}
                              width={24}
                              height={24}
                              style={{ minWidth: '24px' }}
                            />
                          </Box>
                        )}
                        <Box>
                          <Typography variant="h6" fontWeight={300} gutterBottom>
                            {t(subItem.title)}
                          </Typography>
                          {subItem.description && (
                            <Typography variant="body2" fontWeight={300} color="text.secondary">
                              {t(subItem.description)}
                            </Typography>
                          )}
                        </Box>
                      </MuiLink>
                    </Box>
                  ))}
                </Box>
              </AccordionDetails>
            </Accordion>
          ) : (
            <Box
              key={item.key}
              sx={{
                py: 2,
                textAlign: 'left',
                borderBottom: `1px solid ${theme.palette.opacityDark[20]}`,
              }}
            >
              {link}
            </Box>
          );
        })}
      </Stack>

      <Box
        sx={theme => ({
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          p: 2,
          backgroundColor: 'transparent',
          backdropFilter: 'blur(8px) saturate(120%)',
          WebkitBackdropFilter: 'blur(8px) saturate(120%)',
          borderTop: `1px solid ${theme.palette.divider}`,
          display: 'flex',
          gap: 2,
          justifyContent: 'center',
        })}
      >
        <Button
          component={Link}
          color="primary"
          href="/book-a-demo"
          size="medium"
          sx={{
            backgroundColor: 'secondary.main',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            maxWidth: '173px',
            flex: 1,
            color: 'grey.50',
          }}
        >
          {t('bookDemo')}
        </Button>
        <Button
          href={REGISTER_URL}
          component={Link}
          variant="contained"
          size="medium"
          color="primary"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            maxWidth: '173px',
            minHeight: 48,
            flex: 1,
          }}
        >
          {t('signUp')}
        </Button>
      </Box>
    </Box>
  );
}
