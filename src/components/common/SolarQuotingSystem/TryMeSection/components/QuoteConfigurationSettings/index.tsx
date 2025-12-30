import { ChangeEvent, Fragment } from 'react';

import {
  Box,
  Button,
  ButtonGroup,
  ButtonProps,
  Divider,
  FormControlLabel,
  Link,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from '@mui/material';
import { useTranslations } from 'next-intl';
import ColorInput from '@/components/ui/ColorInput';
import { LayoutTypes, Mode } from '@/providers/QuoteSettingsProvider/QuoteSettingsProvider.types';
import { useQuoteSettings } from '@/providers/QuoteSettingsProvider';
import {
  LayoutOptions,
  QuoteConfigurationSettingsWrapper,
  SettingBlock,
} from '@/components/common/SolarQuotingSystem/TryMeSection/TryMeSection.styles';
import SunOutlined from '@/components/ui/icons/SunOutlined';
import MoonLinearOutlined from '@/components/ui/icons/MoonLinearOutlined';

export default function QuoteConfigurationSettings() {
  const t = useTranslations('quotingSystemPage.quoteConfiguration');
  const { settings, setSettings } = useQuoteSettings();

  const getButtonProps = (mode: Mode): ButtonProps => ({
    variant: settings.mode === mode ? 'contained' : 'outlined',
    onClick: () => setSettings(settings => ({ ...settings, mode })),
  });

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () =>
        setSettings(settings => ({ ...settings, [e.target.name]: reader.result as string }));
      reader.readAsDataURL(file);
    }
  };

  return (
    <QuoteConfigurationSettingsWrapper>
      <SettingBlock className="layout-block">
        <div>
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="space-between"
            mb={{ md: 0, lg: 0.75 }}
          >
            <Typography variant="caption" fontWeight={500}>
              {t('layout')}
            </Typography>
            <ButtonGroup>
              <Button {...getButtonProps(Mode.Light)}>
                <SunOutlined />
              </Button>
              <Button {...getButtonProps(Mode.Dark)}>
                <MoonLinearOutlined />
              </Button>
            </ButtonGroup>
          </Stack>
          <Typography variant="caption" color="textSecondary" fontWeight={300}>
            {t('pickLayout')}
          </Typography>
        </div>
        <Divider />
        <LayoutOptions fullWidth>
          <RadioGroup
            row
            value={settings.layoutType}
            onChange={(_, value) =>
              setSettings(settings => ({ ...settings, layoutType: value as LayoutTypes }))
            }
          >
            {Object.values(LayoutTypes).map(item => (
              <FormControlLabel
                key={item}
                value={item}
                control={<Radio color="primary" />}
                labelPlacement="bottom"
                label={
                  <Typography variant="caption" color="textSecondary" fontWeight={500}>
                    {t(`layoutOptions.${item}`)}
                  </Typography>
                }
              />
            ))}
          </RadioGroup>
        </LayoutOptions>
      </SettingBlock>
      <SettingBlock>
        <Typography variant="caption" fontWeight={500}>
          {t('brandingColors')}
        </Typography>
        <Box
          rowGap={{ xs: 1, sm: 1.5, md: 0.2, lg: 1.5 }}
          display="grid"
          columnGap={{ xs: 2, sm: 1.5 }}
          gridAutoFlow={{ xs: 'row', md: 'column', lg: 'row' }}
          gridTemplateRows={{
            xs: 'repeat(3, 1fr)',
            md: '1fr 1fr',
            lg: 'repeat(3, 1fr)',
          }}
          gridTemplateColumns={{
            xs: '1fr minmax(42px, 80px)',
            md: 'repeat(3, 1fr)',
            lg: '1fr 50px',
            xl: '1fr 90px',
          }}
          textAlign={{ xs: 'left', md: 'center', lg: 'left' }}
          alignItems="center"
        >
          {['buttonColor', 'buttonTextColor', 'titleColor'].map(item => (
            <Fragment key={item}>
              <Typography
                sx={{ textWrap: 'nowrap' }}
                variant="caption"
                fontWeight={300}
                component="div"
              >
                {t(`colorsOptions.${item}`)}
              </Typography>
              <ColorInput
                title={t(`colorsOptions.${item}`)}
                value={settings[item as keyof typeof settings]}
                onChange={color => setSettings(settings => ({ ...settings, [item]: color }))}
              />
            </Fragment>
          ))}
        </Box>
      </SettingBlock>
      <Stack
        direction={{ md: 'row', lg: 'column' }}
        gap={0.75}
        display="grid"
        gridTemplateColumns={{ md: '1fr 1fr', lg: '1fr' }}
      >
        <SettingBlock>
          <Stack
            direction={{ xs: 'column', sm: 'row', md: 'column', lg: 'row' }}
            columnGap={1}
            rowGap="2px"
            textAlign="center"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="caption" fontWeight={500}>
              {t('companyLogo')}
            </Typography>
            <Link component="label" underline="always" sx={{ cursor: 'pointer' }} variant="body2">
              {t('upload')}
              <input
                type="file"
                hidden
                onChange={handleFileChange}
                name="companyLogo"
                accept=".svg,.png,.jpg,.jpeg,.gif,image/svg+xml,image/png,image/jpeg"
              />
            </Link>
          </Stack>
        </SettingBlock>
        <SettingBlock>
          <Stack
            direction={{ xs: 'column', sm: 'row', md: 'column', lg: 'row' }}
            columnGap={1}
            rowGap="2px"
            textAlign="center"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="caption" fontWeight={500}>
              {t('background')}
            </Typography>
            <Link component="label" underline="always" sx={{ cursor: 'pointer' }} variant="body2">
              {t('upload')}
              <input
                type="file"
                hidden
                name="background"
                onChange={handleFileChange}
                accept=".png,.jpg,.jpeg,.gif,image/png,image/jpeg"
              />
            </Link>
          </Stack>
        </SettingBlock>
      </Stack>
    </QuoteConfigurationSettingsWrapper>
  );
}
