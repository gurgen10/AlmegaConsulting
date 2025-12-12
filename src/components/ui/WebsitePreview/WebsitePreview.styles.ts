import styled from '@mui/system/styled';
import {
  WEBSITE_PREVIEW_HEIGHT,
  WEBSITE_PREVIEW_WIDTH,
} from '@/components/ui/WebsitePreview/WebsitePreview.constants';

export const WebsitePreviewWrapper = styled('div')(({ theme }) => ({
  aspectRatio: `${WEBSITE_PREVIEW_WIDTH}/${WEBSITE_PREVIEW_HEIGHT}`,
  borderRadius: '6px',
  overflow: 'hidden',

  '.browser-tab': {
    height: 37,
    background: 'var(--light-mode-body, #F2F2F5)',
    display: 'flex',
    padding: `8px 18px`,
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',

    '.url-input': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 4,
      width: 309,
      height: 17,
      padding: '0 5.5px',
      borderRadius: 50,
      background: theme.palette.grey[25],
      position: 'absolute',
      left: '50%',
      top: 10,
      transform: 'translateX(-50%)',

      '.MuiTypography-root': {
        fontSize: '6.474px',
      },
    },
  },
  '.browser-body': {
    height: 'calc(100% - 27px)',
    overflow: 'hidden',
  },
}));
