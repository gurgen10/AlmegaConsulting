import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { WebsitePreviewWrapper } from '@/components/ui/WebsitePreview/WebsitePreview.styles';
import { WebsitePreviewProps } from '@/components/ui/WebsitePreview/WebsitePreview.types';
import DiscIcon from '@/components/ui/icons/DiscIcon';
import LockIcon from '@/components/ui/icons/LockIcon';
import ReloadIcon from '@/components/ui/icons/ReloadIcon';
import DownloadCircleOutlined from '@/components/ui/icons/DownloadCircleOutlined';
import UploadIcon from '@/components/ui/icons/UploadIcon';
import PlusIcon from '@/components/ui/icons/PlusIcon';
import BurgerIcon from '@/components/ui/icons/BurgerIcon';

export default function WebsitePreview({ children, domain }: WebsitePreviewProps) {
  return (
    <WebsitePreviewWrapper>
      <div className="browser-tab">
        <Stack spacing={1} direction="row">
          <DiscIcon fill="#F3605C" />
          <DiscIcon fill="#F8BE39" />
          <DiscIcon fill="#50C845" />
        </Stack>
        <div className="url-input">
          <LockIcon />
          <Typography color="textSecondary" fontWeight={300} component="span">
            {domain}
          </Typography>
          <ReloadIcon />
        </div>
        <Stack spacing={1.5} direction="row">
          <DownloadCircleOutlined />
          <UploadIcon />
          <PlusIcon height={12} width={12} />
          <BurgerIcon />
        </Stack>
      </div>
      <div className="browser-body">{children}</div>
    </WebsitePreviewWrapper>
  );
}
