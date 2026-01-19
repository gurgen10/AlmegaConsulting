'use client';

import { Box, Link as MuiLink, styled, Typography } from '@mui/material';
import Tooltip, { tooltipClasses, TooltipProps } from '@mui/material/Tooltip';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ReactElement, useCallback, useEffect, useRef, useState, MouseEvent } from 'react';
import { MouseEvent as ReactMouseEvent } from 'react';

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
            marginTop: isHeaderShrunk ? '9px !important' : '12px !important',
            borderRadius: '0 0 8px 8px',
            backgroundColor: 'opacityLight.60',
            backdropFilter: 'blur(5px)',
            pointerEvents: 'auto',
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
          sx: {
            zIndex: 9999,
            position: 'relative',
            // Try adding these to force positioning
            top: '-1px !important', // Or adjust this value
          },
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: offset,
              },
            },
            {
              name: 'preventOverflow',
              options: {
                padding: 0,
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

interface MenuTooltipProps {
  children?: ReactElement;
  subMenuItems: SubMenuItem[];
  headerWidth: number;
  headerRef: HTMLDivElement | null;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  anchorElement: ReactElement;
}

const MenuTooltip = ({
  subMenuItems,
  headerWidth,
  headerRef,
  isOpen,
  onOpen,
  onClose,
  anchorElement,
}: MenuTooltipProps) => {
  const t = useTranslations('header');
  const { offset, updateOffset } = useDynamicOffset();
  const anchorRef = useRef<HTMLElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const isHeaderShrunk = useCallback(() => {
    if (headerRef) {
      return headerRef.classList.contains('header-shrink');
    }
    return false;
  }, [headerRef]);

  // Close tooltip on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        onClose();
      }
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
      capture: true, // Use capture phase for better performance
    });

    return () => {
      window.removeEventListener('scroll', handleScroll, { capture: true });
    };
  }, [isOpen, onClose]);

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event: ReactMouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        isOpen &&
        tooltipRef.current &&
        !tooltipRef.current.contains(target) &&
        anchorRef.current &&
        !anchorRef.current.contains(target)
      ) {
        onClose();
      }
    };

    // Add event listener
    document.addEventListener('mousedown', handleClickOutside as unknown as EventListener);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside as unknown as EventListener);
    };
  }, [isOpen, onClose]);

  // Handle hover out of tooltip with delay
  const handleTooltipMouseLeave = (e: MouseEvent) => {
    const relatedTarget = e.relatedTarget as HTMLElement;

    // Check if mouse is moving to anchor element
    const isMovingToAnchor = anchorRef.current?.contains(relatedTarget);

    if (!isMovingToAnchor) {
      // Add a small delay before closing to allow moving to tooltip
      onClose();
    }
  };

  // Handle anchor mouse enter
  const handleAnchorMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    updateOffset(e.currentTarget);
    onOpen();
  };

  // Handle anchor mouse leave
  const handleAnchorMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    const relatedTarget = e.relatedTarget as HTMLElement;
    const isMovingToTooltip = relatedTarget?.closest('.MuiTooltip-popper');

    if (!isMovingToTooltip) {
      onClose();
    }
  };

  return (
    <HtmlTooltip
      open={isOpen}
      onMouseLeave={handleTooltipMouseLeave}
      offset={offset}
      isHeaderShrunk={isHeaderShrunk() ?? false}
      title={
        <Box
          ref={tooltipRef}
          sx={theme => {
            const itemW = 379;
            const gapPx = Number(theme.spacing(4).replace('px', '')) || 32;
            const items = subMenuItems.length;
            const compactWidth = items * itemW + Math.max(0, items - 1) * gapPx;
            const maxAllowed = Math.max(0, headerWidth - 32);
            return {
              width: items >= 3 ? maxAllowed : compactWidth,
            };
          }}
          onMouseLeave={handleTooltipMouseLeave}
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
        onMouseEnter={handleAnchorMouseEnter}
        onMouseLeave={handleAnchorMouseLeave}
        onClick={e => {
          e.stopPropagation();
          if (isOpen) {
            onClose();
          } else {
            onOpen();
          }
        }}
      >
        {anchorElement}
      </Box>
    </HtmlTooltip>
  );
};

export default MenuTooltip;
