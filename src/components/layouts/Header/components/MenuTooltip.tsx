'use client';

import { Box, Link as MuiLink, styled, Typography } from '@mui/material';
import Tooltip, { tooltipClasses, TooltipProps } from '@mui/material/Tooltip';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ReactElement, useCallback, useRef, useState } from 'react';

import { SubMenuItem } from '@/components/layouts/Header/header.types';

const HtmlTooltip = styled(
  ({ className, offset, ...props }: TooltipProps & { offset?: number[] }) => (
    <Tooltip
      {...props}
      arrow
      placement="bottom-start"
      classes={{
        popper: className,
        tooltip: 'tooltip',
        arrow: 'tooltip-arrow',
      }}
      slotProps={{
        tooltip: {
          sx: theme => ({
            borderTop: `2px solid ${theme.palette.primary.main}  !important`,
            boxShadow: '0 8px 20px rgba(2,6,23,0.25) !important',
            backdropFilter: 'blur(10px) saturate(120%)',
            WebkitBackdropFilter: 'blur(10px) saturate(120%)',
            marginTop: '10px !important',
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
        popper: {
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: offset,
              },
            },
          ],
        },
      }}
    />
  )
)(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'transparent',
    color: theme.palette.text.primary,
    maxWidth: 'none',
    padding: 0,
    borderBottomLeftRadius: '8px !important',
    borderBottomRightRadius: '8px !important',
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
  transition: 'background-color 0.2s ease',
  position: 'relative',
  pr: 4,
  '&::after': {
    content: "' '",
    position: 'absolute',
    right: 0,
    top: 0,
    width: '1px',
    height: '100%',
    backgroundColor: theme.palette.opacityDark[20],
  },
  '&:hover': {
    '& .MuiTypography-h6': {
      color: theme.palette.primary.main,
    },
  },
}));

const useDynamicOffset = () => {
  const [offset, setOffset] = useState([-200, 0]);

  const updateOffset = useCallback((element: HTMLElement | null) => {
    const headerLogo = document.getElementById('header-logo');

    if (!element || !headerLogo) return;

    const logoOffset = headerLogo.getBoundingClientRect().left;
    const menuItemRect = element.getBoundingClientRect().left;
    const xOffset = logoOffset - menuItemRect - 10;

    setOffset([xOffset, 0]);
  }, []);

  return { offset, updateOffset };
};

const MenuTooltip = ({
  children,
  subMenuItems,
  headerWidth,
}: {
  children: ReactElement;
  subMenuItems: SubMenuItem[];
  headerWidth: number;
}) => {
  const t = useTranslations('header');
  const { offset, updateOffset } = useDynamicOffset();
  const anchorRef = useRef<HTMLElement>(null);

  return (
    <HtmlTooltip
      offset={offset}
      title={
        <Box sx={{ width: headerWidth - 32 }}>
          <Box
            sx={{
              width: '100%',
              background: 'transparent',
              paddingTop: theme => theme.spacing(3),
              paddingLeft: theme => theme.spacing(3),
              paddingBottom: theme => theme.spacing(3),
              display: 'grid',
              gap: 4,
              gridTemplateColumns:
                subMenuItems.length < 3
                  ? `repeat(${subMenuItems.length}, 379px)`
                  : 'repeat(3, 379px)',
              '& > *': {
                backdropFilter: 'blur(4px) saturate(120%)',
                WebkitBackdropFilter: 'blur(4px) saturate(120%)',
              },
            }}
          >
            {subMenuItems.map(item => (
              <MenuItemCard
                className="tooltip-item"
                key={item.key}
                href={item.url}
                width={379}
                sx={{
                  position: 'relative',
                  pr: 4,
                }}
              >
                <Box sx={{ mr: 1.5, mt: 0.5 }}>
                  <Image src={item.icon} alt={item.title} width={32} height={32} />
                </Box>
                <Box>
                  <Typography variant="h6" gutterBottom color="grey.900" fontWeight={300}>
                    {t(item.title)}
                  </Typography>
                  <Typography variant="body2" color="grey.900" fontWeight={300}>
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
      <Box
        ref={anchorRef}
        onMouseEnter={() => anchorRef.current && updateOffset(anchorRef.current)}
      >
        {' '}
        {children}
      </Box>
    </HtmlTooltip>
  );
};

export default MenuTooltip;
