'use client';

import { Box, Link as MuiLink, styled, Typography } from '@mui/material';
import Tooltip, { tooltipClasses, TooltipProps } from '@mui/material/Tooltip';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ReactElement } from 'react';

import { SubMenuItem } from '@/components/layouts/Header/header.types';

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip
    {...props}
    arrow
    placement="bottom"
    // onOpen={e => {
    //   if (typeof document !== 'undefined') {
    //     document.querySelector('[data-header="site-header"]')?.classList.add('tooltip-open');
    //   }
    //   const userOnOpen = (props as unknown).onOpen;
    //   if (typeof userOnOpen === 'function') userOnOpen(e);
    // }}
    // onClose={e => {
    //   if (typeof document !== 'undefined') {
    //     document.querySelector('[data-header="site-header"]')?.classList.remove('tooltip-open');
    //   }
    //   const userOnClose = (props as unknown).onClose;
    //   if (typeof userOnClose === 'function') userOnClose(e);
    // }}
    classes={{
      popper: className,
      tooltip: 'tooltip',
      arrow: 'tooltip-arrow',
    }}
    slotProps={{
      tooltip: {
        sx: theme => ({
          borderTop: `2px solid ${theme.palette.primary.main}  !important`,
          borderRadius: '8px !important',
          boxShadow: '0 8px 20px rgba(2,6,23,0.25) !important',
          backdropFilter: 'blur(10px) saturate(120%)',
          WebkitBackdropFilter: 'blur(10px) saturate(120%)',
          '& .MuiTooltip-arrow': {
            color: theme.palette.background.paper,
            '&::before': {
              border: `1px solid ${theme.palette.divider}`,
              borderTop: 'none',
              borderLeft: 'none',
              backgroundColor: theme.palette.primary.main,
              width: '32px',
              height: '10px',
              position: 'relative',
              top: '-1px',
            },
          },
        }),
      },
    }}
  />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'transparent',
    color: theme.palette.text.primary,
    maxWidth: 'none',
    padding: 0,
    borderRadius: '12px',
    // Use a frosted backdrop + subtle border
    border: `1px solid ${theme.palette.divider}`,
    overflow: 'visible',
    position: 'relative',
    backdropFilter: 'blur(10px) saturate(120%)',
    WebkitBackdropFilter: 'blur(10px) saturate(120%)',
    '&::before': {
      content: '""',
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      filter: 'blur(6px)',
      transition: 'transform 0.9s ease, opacity 0.3s ease',
      opacity: 0.9,
    },
    '&:hover::before': {
      transform: 'translateX(10%)',
    },
  },
}));

const MenuItemCard = styled(MuiLink)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  padding: theme.spacing(2),
  color: 'inherit',
  textDecoration: 'none',
  backgroundColor: 'transparent',
  transition: 'background-color 0.2s ease',
  position: 'relative',
  '&:not(:last-child)::after': {
    content: '""',
    position: 'absolute',
    right: 0,
    top: theme.spacing(2),
    bottom: theme.spacing(2),
    width: '1px',
  },
  '&:hover': {
    '& .MuiTypography-h6': {
      color: theme.palette.primary.main,
    },
  },
}));

const MenuTooltip = ({
  children,
  subMenuItems,
}: {
  children: ReactElement;
  subMenuItems: SubMenuItem[];
}) => {
  const t = useTranslations('header');

  return (
    <HtmlTooltip
      title={
        <Box sx={{ width: 'max-content', minWidth: '600px' }}>
          <Box
            sx={{
              background: 'transparent',
              paddingTop: theme => theme.spacing(3),
              paddingLeft: theme => theme.spacing(3),
              paddingBottom: theme => theme.spacing(3),
              display: 'grid',
              gap: '4px',
              gridTemplateColumns:
                subMenuItems.length < 3
                  ? `repeat(${subMenuItems.length}, 320px)`
                  : 'repeat(3, 320px)',
              '& > *': {
                backdropFilter: 'blur(4px) saturate(120%)',
                WebkitBackdropFilter: 'blur(4px) saturate(120%)',
              },
            }}
          >
            {subMenuItems.map(item => (
              <MenuItemCard key={item.key} href={item.url}>
                <Box sx={{ mr: 2, mt: 0.5 }}>
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={24}
                    height={24}
                    style={{ minWidth: '24px' }}
                  />
                </Box>
                <Box>
                  <Typography variant="h6" gutterBottom color="grey.900">
                    {t(item.title)}
                  </Typography>
                  <Typography variant="body2" color="grey.900">
                    {t(item.description)}
                  </Typography>
                </Box>
              </MenuItemCard>
            ))}
          </Box>
        </Box>
      }
      slotProps={{
        tooltip: {
          sx: {
            '& .MuiTooltip-arrow': {
              color: 'background.paper',
              '&::before': {
                border: '1px solid',
                borderColor: 'divider',
              },
            },
          },
        },
      }}
    >
      {children}
    </HtmlTooltip>
  );
};

export default MenuTooltip;
