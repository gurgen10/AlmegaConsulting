'use client';

import { Box, Link as MuiLink, styled, Typography } from '@mui/material';
import Tooltip, { tooltipClasses, TooltipProps } from '@mui/material/Tooltip';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ReactElement, useCallback, useEffect, useRef, useState } from 'react';

import { SubMenuItem } from '@/components/layouts/Header/header.types';

const HtmlTooltip = styled(
  ({
    className,
    offset,
    isHeaderShrunk,
    ...props
  }: TooltipProps & { offset?: number[]; isHeaderShrunk: boolean }) => (
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
            marginTop: isHeaderShrunk ? '9px !important' : '11px !important',
            borderRadius: '0 0 8px 8px',
            backgroundColor: 'opacityLight.60',
            backdropFilter: 'blur(5px)',
            '& .MuiTooltip-arrow': {
              color: theme.palette.background.paper,
              display: 'inline-block',
              width: 16,
              '&::before': {
                border: `1px solid ${theme.palette.divider}`,
                borderTop: 'none',
                borderLeft: 'none',
                backgroundColor: theme.palette.primary.main,
                display: 'inline-block',
                width: '42px',
                height: '10px',
                position: 'relative',
                top: '-8px',
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
    color: theme.palette.text.primary,
    maxWidth: 'none',
    padding: 0,
    borderBottomLeftRadius: '8px !important',
    borderBottomRightRadius: '8px !important',
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
  backgroundColor: 'transparent',

  pr: 4,
  '&::after': {
    content: "' '",
    position: 'absolute',
    right: 0,
    top: 0,
    width: '1px',
    height: '104px',
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
    const xOffset = logoOffset - menuItemRect - 7;

    setOffset([xOffset, 0]);
  }, []);

  return { offset, updateOffset };
};

const MenuTooltip = ({
  children,
  subMenuItems,
  headerWidth,
  headerRef,
}: {
  children: ReactElement;
  subMenuItems: SubMenuItem[];
  headerWidth: number;
  headerRef: HTMLDivElement | null;
}) => {
  const t = useTranslations('header');
  const { offset, updateOffset } = useDynamicOffset();
  const anchorRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);

  const isHeaderShrunk = useCallback(() => {
    if (headerRef) {
      return headerRef.classList.contains('header-shrink');
    }
    return false;
  }, [headerRef]);

  useEffect(() => {
    const handleScroll = () => {
      if (open) {
        setOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [open]);

  return (
    <HtmlTooltip
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      offset={offset}
      isHeaderShrunk={isHeaderShrunk() ?? false}
      title={
        <Box
          sx={theme => {
            const itemW = 379;
            const gapPx = Number(theme.spacing(4).replace('px', '')) || 32;
            const items = subMenuItems.length;
            const compactWidth = items * itemW + Math.max(0, items - 1) * gapPx;
            const maxAllowed = Math.max(0, headerWidth - 32);
            // For 3 or more items, let the tooltip span the available header width.
            return {
              width: items >= 3 ? maxAllowed : compactWidth,
            };
          }}
        >
          <Box
            sx={{
              width: 'auto',
              background: 'transparent',
              pt: theme => theme.spacing(4),
              pb: theme => theme.spacing(4),
              pl: theme => theme.spacing(2),
              pr: theme => theme.spacing(2),
              display: 'grid',
              gap: 2,
              gridTemplateColumns:
                subMenuItems.length < 3 ? `repeat(${subMenuItems.length}, 1fr)` : 'repeat(3, 1fr)',
            }}
          >
            {subMenuItems.map((item, idx) => {
              const columns = subMenuItems.length < 3 ? subMenuItems.length : 3;
              const isRowEnd = (idx + 1) % columns === 0 || idx === subMenuItems.length - 1;
              return (
                <MenuItemCard
                  className="tooltip-item"
                  key={item.key}
                  href={item.url}
                  sx={{
                    position: 'relative',
                    pr: 4,
                    '&::after': isRowEnd ? { display: 'none' } : undefined,
                  }}
                >
                  <Box sx={{ mr: 1.5, mt: 0.5 }}>
                    <Image src={item.icon} alt={item.title} width={32} height={32} />
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      gutterBottom
                      color="grey.900"
                      fontWeight={300}
                      sx={{ marginBottom: 0.5 }}
                    >
                      {t(item.title)}
                    </Typography>
                    <Typography variant="body2" color="grey.900" fontWeight={300}>
                      {t(item.description)}
                    </Typography>
                  </Box>
                </MenuItemCard>
              );
            })}
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
        onMouseEnter={e => {
          updateOffset(e.currentTarget);
          setOpen(true);
        }}
        onClick={e => {
          e.stopPropagation();
          setOpen(prev => !prev);
        }}
      >
        {children}
      </Box>
    </HtmlTooltip>
  );
};

export default MenuTooltip;
