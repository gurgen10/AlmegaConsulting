import { Box, Card, Typography } from '@mui/material';
import Image from 'next/image';

interface Review {
  name: string;
  position: string;
  review: string;
  image: string;
}

const Review = ({ name, position, review, image }: Review) => {
  return (
    <Card sx={{ height: '100%' }}>
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          cursor: 'grab',
        }}
      >
        <Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 2,
              pt: 3,
              px: 4,
            }}
          >
            <Box sx={{ display: 'flex' }}>
              {Array.from({ length: 5 }).map((_, index) => (
                <Image
                  key={index}
                  src="/images/Testimonials/star.svg"
                  alt="star"
                  width={18}
                  height={18}
                />
              ))}
            </Box>
            <Box>
              <Image
                src="/images/Testimonials/blockquote.svg"
                alt="blockquote"
                width={20}
                height={18}
              />
            </Box>
          </Box>
          <Box>
            <Typography
              variant="subtitle2"
              sx={{
                py: 2,
                color: 'grey.800',
                fontWeight: 300,
                px: 4,
                textAlign: 'left',
                whiteSpace: 'normal',
                wordWrap: 'break-word',
                overflow: 'visible',
                textOverflow: 'clip',
              }}
            >
              {review}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={theme => ({
            borderTop: `1px solid ${theme.palette.tertiary.main}`,
            py: 2,
            px: 4,
            display: 'flex',
            alignItems: 'center',
            gap: 2,
          })}
        >
          <Box
            sx={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              overflow: 'hidden',
              flexShrink: 0,
              position: 'relative',
            }}
          >
            <Image
              src={image || ''}
              alt={image ?? ''}
              fill
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
            {/*<Box sx={{ width: '48px', height: '48px', backgroundColor: 'primary.main' }}></Box>*/}
          </Box>
          <Box>
            <Typography
              variant="subtitle1"
              color="grey.800"
              fontWeight={700}
              textAlign="left"
              sx={{
                textAlign: 'left',
                wordWrap: 'break-word',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                width: '220px',
                display: 'block',
              }}
            >
              {name}
            </Typography>
            <Typography
              variant="subtitle2"
              color="grey.600"
              fontWeight={300}
              textAlign="left"
              sx={{
                textAlign: 'left',
                wordWrap: 'break-word',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                width: '90%',
                display: 'block',
              }}
            >
              {position}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default Review;
