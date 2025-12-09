import { Box, Card, Typography } from '@mui/material';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const Unique = ({
  title,
  text,
  image,
  textAi,
}: {
  title: string;
  text: string;
  image: string;
  textAi?: string;
}) => {
  const t = useTranslations('homePage');
  return (
    <Card
      sx={theme => ({
        borderRadius: '16px',
        borderLeftWidth: '8px',
        borderLeftStyle: 'solid',
        borderLeftColor: theme.palette.secondary.light,
        position: 'relative',
        backgroundColor: 'primary.700',
        height: '100%',
        boxShadow: '0 0 8px 0 rgba(0, 0, 0, 0.32)',
      })}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: {
            xl: 'center',
            xs: 'start',
          },
          gap: 2,
          p: 3,
        }}
      >
        {!textAi && (
          <Box>
            <Image src={image} alt="image" width={48} height={48} />
          </Box>
        )}
        <Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            {textAi && (
              <Box sx={{ width: { xl: 48, xs: 'auto' } }}>
                <Image src={image} alt="image" width={48} height={48} />
              </Box>
            )}
            <Typography variant="h6" sx={{ fontWeight: 500, color: 'grey.50', mb: 1 }}>
              {title}
            </Typography>
          </Box>
          <Typography variant="subtitle2" sx={{ fontWeight: 300, color: 'grey.25', mb: 2 }}>
            {text}
          </Typography>
          {textAi && (
            <Box
              sx={{
                padding: 2,
                backgroundColor: 'opacityLight.8',
                borderRadius: '8px',
                borderStyle: 'solid',
                borderWidth: '1px',
                borderColor: 'opacityLight.50',
              }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: 300, color: 'grey.25' }}>
                {t.rich(textAi, {
                  bold: chunks => (
                    <Typography variant="inherit" component="strong" fontWeight={500}>
                      {chunks}
                    </Typography>
                  ),
                })}
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
      {textAi && (
        <Box sx={{ position: 'absolute', bottom: 0, right: 0 }}>
          <Image
            src="/images/what-makes-us-unique/patent-pending.svg"
            alt="image"
            width="134"
            height="105"
          />
        </Box>
      )}
    </Card>
  );
};

export default Unique;
