import { Box, Card, Typography } from '@mui/material';
import Image from 'next/image';

const LovePoints = ({ title, text, image }: { title: string; text: string; image: string }) => {
  return (
    <Box
      sx={{
        backgroundColor: 'transparent',
      }}
    >
      <Box
        sx={theme => ({
          display: 'flex',
          gap: 2,
          flexDirection: 'row',
          [theme.breakpoints.down('lg')]: {
            flexDirection: 'column',
          },
          [theme.breakpoints.down('sm')]: {
            flexDirection: 'row',
            columnGap: 4,
          },
        })}
      >
        <Box
          sx={theme => ({
            width: 32,
            height: 32,
            [theme.breakpoints.down('sm')]: { width: 24, height: 24 },
          })}
        >
          <Image
            src={image}
            alt={image.split('/').pop() ?? ''}
            width={32}
            height={32}
            style={{ width: 'fit-content', height: '100%' }}
          />
        </Box>

        <Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.900', mb: 1 }}>
              {title}
            </Typography>
          </Box>
          <Typography variant="subtitle2" sx={{ fontWeight: 300, color: 'grey.900', mb: 2 }}>
            {text}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LovePoints;
