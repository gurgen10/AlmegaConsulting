import { ReactElement } from 'react';
import { Box, Link as MuiLink, Typography, styled } from '@mui/material';
import { useTranslations } from 'next-intl';

import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { SubMenuItem } from '@/components/layouts/Header/header.types';
import Image from 'next/image';

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip
    {...props}
    arrow
    placement="bottom"
    classes={{
      popper: className,
      tooltip: 'tooltip',
      arrow: 'tooltip-arrow',
    }}
    slotProps={{
      tooltip: {
        sx: theme => ({
          borderTop: `2px solid ${theme.palette.primary.main}  !important`,
          borderRadius: '4px !important',
          background: 'grey.50',
          boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.20) !important',
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
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    maxWidth: 'none',
    padding: 0,
    borderRadius: '8px',
    boxShadow: theme.shadows[3],
    border: `1px solid ${theme.palette.divider}`,
    overflow: 'visible',
    position: 'relative',
    marginTop: '8px !important',
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
  '&:not(:last-child)::after': {
    content: '""',
    position: 'absolute',
    right: 0,
    top: theme.spacing(2),
    bottom: theme.spacing(2),
    width: '1px',
    backgroundColor: theme.palette.opacityDark[20],
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
              background: theme => theme.palette.background.paper + ' !important',
              paddingTop: theme => theme.spacing(3),
              paddingLeft: theme => theme.spacing(3),
              paddingBottom: theme => theme.spacing(3),
              display: 'grid',
              gap: '4px',
              gridTemplateColumns:
                subMenuItems.length < 3
                  ? `repeat(${subMenuItems.length}, 320px)`
                  : 'repeat(3, 320px)',
              backgroundColor: theme => theme.palette.divider,
              '& > *': {
                backgroundColor: theme => theme.palette.background.paper,
              },
            }}>
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
      }}>
      {children}
    </HtmlTooltip>
  );
};

export default MenuTooltip;
