import { Box } from '@mui/material';
import { BoxProps } from '@mui/system';

export default function GradientDivider({ sx = {}, ...props }: BoxProps) {
  return (
    <Box
      {...props}
      sx={{
        ...sx,
        height: '1px',
        opacity: '.5',
        background: `linear-gradient(90deg, #878C8C 0%, rgba(135, 140, 140, 0.00) 100%)`,
      }}
    />
  );
}
