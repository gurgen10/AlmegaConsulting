'use client';

import { Box, Button, Link as MuiLink } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useMemo, useState, useRef } from 'react';

import MenuTooltip from '@/components/layouts/Header/components/MenuTooltip';
import { menuItems as defaultMenuItems } from '@/components/layouts/Header/Header.constants';
import { REGISTER_URL } from '@/shared/constants/common';
import LanguageSwitcher from '@/components/common/LanguageSwitcher';

interface MenuDesktopProps {
  headerWidth: number;
  headerRef: HTMLDivElement | null;
}

export default function MenuDesktop({ headerWidth, headerRef }: MenuDesktopProps) {
  const t = useTranslations('header');
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const menuContainerRef = useRef<HTMLDivElement>(null);

  const activeItem = useMemo(() => {
    const activeMenuItem = defaultMenuItems.find(
      item => pathname === item.url || (item.url !== '/' && pathname.startsWith(item.url))
    );

    return activeMenuItem ? activeMenuItem.key : '/';
  }, [pathname]);

  // Close all tooltips when clicking outside
  const handleCloseAllTooltips = () => {
    setActiveTooltip(null);
  };

  return (
    <Box
      ref={menuContainerRef}
      sx={{ display: 'flex', alignItems: 'center', width: '100%', gap: 2 }}
      onMouseLeave={() => {
        setHoveredItem(null);
        // Only close tooltip if mouse leaves entire menu container
        if (!menuContainerRef.current?.matches(':hover')) {
          handleCloseAllTooltips();
        }
      }}
    >
      {defaultMenuItems.map(item => {
        const isActive = activeItem === item.key;
        const isTooltipOpen = activeTooltip === item.key;

        const link = (
          <MuiLink
            sx={{
              backgroundColor: 'transparent',
              padding: '6px 8px',
              color: isActive || isTooltipOpen ? 'primary.500' : 'opacityDark.90',
              position: 'relative',
              cursor: 'pointer',
              transition: 'color 0.2s ease',
              '&:hover': {
                color: 'primary.500',
              },
            }}
            underline="none"
            href={item.url}
            component={item.submenuItems?.length ? 'button' : 'a'}
            className={isActive ? 'active' : ''}
            onMouseEnter={() => {
              setHoveredItem(item.key);
              if (item.submenuItems?.length) {
                setActiveTooltip(item.key);
              }
            }}
          >
            {t(item.key)}
          </MuiLink>
        );

        return item.submenuItems?.length ? (
          <Box
            key={item.key}
            sx={{ display: 'inline-block' }}
            onMouseLeave={e => {
              // Check if mouse is moving to another menu item or outside
              const relatedTarget = e.relatedTarget as HTMLElement;
              const isMovingToAnotherMenuItem = relatedTarget?.closest('.menu-item');
              const isMovingToTooltip = relatedTarget?.closest('.MuiTooltip-popper');

              if (!isMovingToTooltip && !isMovingToAnotherMenuItem) {
                setActiveTooltip(null);
                setHoveredItem(null);
              }
            }}
          >
            <MenuTooltip
              key={item.key}
              subMenuItems={item.submenuItems}
              headerWidth={headerWidth}
              headerRef={headerRef}
              isOpen={isTooltipOpen}
              onOpen={() => setActiveTooltip(item.key)}
              onClose={() => setActiveTooltip(null)}
              anchorElement={<Box className="menu-item">{link}</Box>}
            />
          </Box>
        ) : (
          <Box
            key={item.key}
            sx={{ display: 'inline-block' }}
            className="menu-item"
            onMouseLeave={() => {
              if (hoveredItem === item.key) {
                setHoveredItem(null);
              }
            }}
          >
            {link}
          </Box>
        );
      })}
      <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center' }}>
        <Button
          component={Link}
          href="/#book-a-demo"
          size="medium"
          variant="text"
          color="secondary"
        >
          {t('bookDemo')}
        </Button>
        <Box
          sx={{
            width: '1px',
            height: '38px',
            backgroundColor: 'opacityDark.12',
            transition: 'width 0.3s',
            mx: 2,
          }}
        ></Box>
        <LanguageSwitcher />
      </Box>
    </Box>
  );
}
