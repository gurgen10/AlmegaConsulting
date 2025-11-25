import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Link as MuiLink,
  Stack,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

import ArrowRight from '@/components/common/Icons/ArrowRight';
import { menuItems } from '@/components/layouts/Header/Header.constants';
import { MenuItem, SubMenuItem } from '@/components/layouts/Header/header.types';
import { LOGIN_URL } from '@/shared/constants/common';

interface MenuMobileProps {
  onClose: () => void;
}

export default function MenuMobile({ onClose }: MenuMobileProps) {
  const t = useTranslations('header');
  const pathname = usePathname();
  const router = useRouter();
  const [activeItem, setActiveItem] = useState<string>('');
  const [expandedKey, setExpandedKey] = useState<string | false>(false);
  const [activeSubKey, setActiveSubKey] = useState<string | null>(null);
  const theme = useTheme();
  const [hash, setHash] = useState('');
  const bookDemoUrl = '#book-a-demo';

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (menuItems.length > 0) {
      const currentHash = window.location.hash || '';
      const activeMenuItem = menuItems.find(item => {
        const itemUrl = item.url.startsWith('/#')
          ? item.url
          : pathname + (item.url === '/' ? '' : item.url);
        const currentUrl = currentHash ? `/#${currentHash.substring(1)}` : pathname;
        return currentUrl === itemUrl || (itemUrl !== '/' && currentUrl.startsWith(itemUrl));
      });

      let activeKey = currentHash === bookDemoUrl ? bookDemoUrl : activeMenuItem?.key;

      if (!activeKey) {
        const currentUrl = currentHash ? `/#${currentHash.substring(1)}` : pathname;
        for (const item of menuItems) {
          const sub = item.submenuItems?.find(sub => sub.url === currentUrl);
          if (sub) {
            activeKey = item.key;
            setActiveSubKey(sub.key);
            setExpandedKey(item.key);
            break;
          }
        }
      }

      setActiveItem(activeKey ?? menuItems[0].key);
    }
  }, [pathname, hash]);

  useEffect(() => {
    if (pathname) {
      const activeMenuItem = menuItems.find(
        item => pathname === item.url || (item.url !== '/' && pathname.startsWith(item.url))
      );

      let activeKey = hash === bookDemoUrl ? bookDemoUrl : activeMenuItem?.key;

      if (!activeKey) {
        const currentHash = window.location.hash || '';
        const currentUrl = currentHash ? `/#${currentHash.substring(1)}` : pathname;
        for (const item of menuItems) {
          const sub = item.submenuItems?.find(sub => sub.url === currentUrl);
          if (sub) {
            activeKey = item.key;
            setActiveSubKey(sub.key);
            setExpandedKey(item.key);
            break;
          }
        }
      }

      if (activeKey) {
        setActiveItem(activeKey);
      }
    }
  }, [pathname]);

  const handleItemClick = (item: MenuItem, isSubmenuItem = false) => {
    setActiveItem(item.key);
    if (!item.submenuItems?.length || isSubmenuItem) {
      onClose();
    }
    if (item.url) {
      router.push(item.url);
    }
  };

  const handleSubItemClick = (parent: MenuItem, subItem: SubMenuItem) => {
    setActiveItem(parent.key);
    onClose();
    if (subItem.url) {
      router.push(subItem.url);
    }
  };

  return (
    <Box
      component="nav"
      sx={{
        width: '100%',
        height: 'calc(100vh - 68px)',
        backgroundColor: 'grey.50',
        position: 'relative',
        display: 'flex',
        padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
        flexDirection: 'column',
      }}>
      <Stack
        mb={3}
        gap={1}
        sx={{
          overflowY: 'auto',
          flex: 1,
          pb: '120px',
        }}>
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
              component={item.submenuItems?.length ? 'span' : 'button'}
              onClick={() => {
                if (item.submenuItems?.length) {
                  setExpandedKey(prev => (prev === item.key ? false : item.key));
                } else {
                  setActiveSubKey(null);
                  handleItemClick(item);
                }
              }}
              className={isActive ? 'active' : ''}>
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
                '&.Mui-expanded .MuiAccordionSummary-expandIconWrapper': {
                  transform: 'rotate(-90deg)',
                },
                '&.MuiPaper-root::before': {
                  content: "''",
                  height: 0,
                },
              }}>
              <AccordionSummary
                expandIcon={<ArrowRight />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{
                  marginLeft: 0,
                  paddingLeft: '6px',
                  '&.MuiAccordionSummary-root.Mui-expanded': {
                    minHeight: '48px',
                  },
                  '& .MuiAccordionSummary-content.Mui-expanded': {
                    margin: theme.spacing(0, 0),
                  },
                }}>
                {link}
              </AccordionSummary>
              <AccordionDetails sx={{ p: 0 }}>
                <Box
                  sx={{
                    p: 2,
                    textAlign: 'left',
                  }}>
                  {item.submenuItems?.map(subItem => (
                    <Box
                      key={subItem.key}
                      sx={{
                        '&:not(:last-child)': {
                          borderBottom: theme => `1px solid ${theme.palette.divider}`,
                        },
                      }}>
                      <MuiLink
                        href={subItem.url}
                        onClick={() => handleSubItemClick(item, subItem)}
                        sx={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          p: 2,
                          textDecoration: 'none',
                          color: 'grey.900',
                          '& .MuiTypography-h6': {
                            color: activeSubKey === subItem.key ? 'primary.main' : 'inherit',
                          },
                          '&:hover': {
                            '& .MuiTypography-h6': {
                              color: 'primary.main',
                            },
                          },
                        }}>
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
                          <Typography variant="h6" gutterBottom>
                            {t(subItem.title)}
                          </Typography>
                          {subItem.description && (
                            <Typography variant="body2" color="text.secondary">
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
                padding: '6px 8px',
                textAlign: 'left',
                borderBottom: `1px solid ${theme.palette.opacityDark[20]}`,
              }}>
              {link}
            </Box>
          );
        })}
      </Stack>

      <Box
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          p: 2,
          backgroundColor: 'grey.50',
          borderTop: '1px solid',
          borderColor: 'divider',
          display: 'flex',
          gap: 2,
          justifyContent: 'center',
        }}>
        <Button
          component={Link}
          color="primary"
          href="/#book-a-demo"
          size="medium"
          sx={{
            backgroundColor: 'secondary.500',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            maxWidth: '173px',
            flex: 1,
            color: 'grey.50',
            '&:hover': {
              backgroundColor: 'secondary.700',
            },
          }}
          onClick={() => handleItemClick('bookDemo' as unknown as MenuItem)}>
          {t('bookDemo')}
        </Button>
        <Button
          color="inherit"
          href={LOGIN_URL}
          size="medium"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            maxWidth: '173px',
            minHeight: 48,
            flex: 1,
            backgroundColor: 'primary.500',
            borderRadius: '4px',
            color: 'grey.50',
            '&:hover': {
              backgroundColor: 'primary.600',
            },
          }}>
          {t('login')}
        </Button>
      </Box>
    </Box>
  );
}
