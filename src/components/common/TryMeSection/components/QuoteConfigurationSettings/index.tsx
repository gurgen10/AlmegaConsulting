import { ChangeEvent } from 'react';
import {
  LayoutOptions,
  QuoteConfigurationSettingsWrapper,
  SettingBlock,
} from '@/components/common/TryMeSection/TryMeSection.styles';
import {
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
import MoonLinearIcon from '@/components/common/TryMeSection/icons/MoonLinearIcon';
import SunLinearIcon from '@/components/common/TryMeSection/icons/SunLinearIcon';
import { TypographyProps } from '@mui/system';
import ColorInput from '@/components/ui/ColorInput';
import { LayoutTypes, Mode } from '@/providers/QuoteSettingsProvider/QuoteSettingsProvider.types';
import { useQuoteSettings } from '@/providers/QuoteSettingsProvider';

const brandingLabelProps = {
  variant: 'caption',
  fontWeight: 300,
  component: 'div',
} as TypographyProps;

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
    <QuoteConfigurationSettingsWrapper spacing={0.75}>
      <SettingBlock>
        <div>
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="space-between"
            mb={0.75}
          >
            <Typography variant="caption" fontWeight={500}>
              {t('layout')}
            </Typography>
            <ButtonGroup>
              <Button {...getButtonProps(Mode.Light)}>
                <SunLinearIcon />
              </Button>
              <Button {...getButtonProps(Mode.Dark)}>
                <MoonLinearIcon />
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
                label={<Typography variant="caption">{t(`layoutOptions.${item}`)}</Typography>}
              />
            ))}
          </RadioGroup>
        </LayoutOptions>
      </SettingBlock>
      <SettingBlock>
        <Typography variant="caption" fontWeight={500}>
          {t('brandingColors')}
        </Typography>
        <Stack
          gap={1.5}
          display="grid"
          gridTemplateColumns={{ xs: '1fr 90px' }}
          alignItems="center"
        >
          <Typography {...brandingLabelProps}>{t('colorsOptions.button')}</Typography>
          <ColorInput
            title={t('colorsOptions.button')}
            value={settings.buttonColor}
            onChange={color => setSettings(settings => ({ ...settings, buttonColor: color }))}
          />
          <Typography {...brandingLabelProps}>{t('colorsOptions.buttonText')}</Typography>
          <ColorInput
            title={t('colorsOptions.buttonText')}
            value={settings.buttonTextColor}
            onChange={color => setSettings(settings => ({ ...settings, buttonTextColor: color }))}
          />
          <Typography {...brandingLabelProps}>{t('colorsOptions.title')}</Typography>
          <ColorInput
            title={t('colorsOptions.title')}
            value={settings.titleColor}
            onChange={color => setSettings(settings => ({ ...settings, titleColor: color }))}
          />
        </Stack>
      </SettingBlock>
      <SettingBlock>
        <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between">
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
        <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between">
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
    </QuoteConfigurationSettingsWrapper>
  );
}
