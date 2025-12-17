import { Box, Typography } from '@mui/material';
import { InfoGridItemProps } from '@/components/ui/InfoGrid/InfoGridItem.types';

export default function InfoGridItem({ title, text, icon }: InfoGridItemProps) {
  return (
    <Box>
      <Box
        display="grid"
        gap={2}
        gridTemplateColumns={{ xs: 'max-content 1fr', sm: '1fr', xl: 'max-content 1fr' }}
      >
        <Box
          component="span"
          sx={{
            svg: {
              width: { xs: 32, sm: 48 },
              height: { xs: 32, sm: 48 },
            },
          }}
        >
          {icon}
        </Box>

        <Box>
          <Typography component="h3" variant="h6" fontSize={700} mb={{ xs: 1, sm: 2, xl: 1 }}>
            {title}
          </Typography>
          <Typography component="div" variant="subtitle2" fontWeight={300}>
            {text}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
