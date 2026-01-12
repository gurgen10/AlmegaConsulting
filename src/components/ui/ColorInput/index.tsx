import { useState, MouseEvent, ChangeEvent, useRef, useEffect } from 'react';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import { HexColorPicker } from 'react-colorful';
import Popover, { PopoverOrigin } from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import tinyColor from 'tinycolor2';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { ColorInputProps } from '@/components/ui/ColorInput/ColorInput.types';
import { ColorButton, ColorPicker } from '@/components/ui/ColorInput/ColorInput.styles';
import { useTranslations } from 'next-intl';

const anchorPosition = { top: 10, left: 0 };
const anchorOrigin: PopoverOrigin = { vertical: 28, horizontal: 'right' };
const transformOrigin: PopoverOrigin = { horizontal: 'right', vertical: 'top' };

export default function ColorInput({ title, value, onChange }: ColorInputProps) {
  const t = useTranslations('colorPicker');
  const inputRef = useRef<HTMLInputElement>(null);
  const popoverInputRef = useRef<HTMLInputElement>(null);
  const isInputFocused = useRef(false);
  const isPopoverInputFocused = useRef(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (inputRef.current && !isInputFocused.current) inputRef.current.value = value || '';
    if (popoverInputRef.current && !isPopoverInputFocused.current)
      popoverInputRef.current.value = value || '';
  }, [value]);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const rgbColor = tinyColor(value).toRgb();
  const open = Boolean(anchorEl);
  const handleClose = () => setAnchorEl(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const color = tinyColor(e.target.value);
    if (color.isValid()) onChange(color.toHexString());
  };

  const handleRgbChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value || 0);
    if (Number.isNaN(value) || value < 0 || value > 255) return;
    const color = tinyColor({ ...rgbColor, [e.target.name]: value });
    if (color.isValid()) onChange(color.toHexString());
  };

  const handleBlur = () => {
    isInputFocused.current = false;
    isPopoverInputFocused.current = false;
    if (inputRef.current) inputRef.current.value = value || '';
    if (popoverInputRef.current) popoverInputRef.current.value = value || '';
  };

  return (
    <div>
      <ColorButton fullWidth style={{ background: value }} onClick={handleClick} />
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorPosition={anchorPosition}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
      >
        <ColorPicker>
          <Typography variant="subtitle2">{title ?? t('colorPicker')}</Typography>
          <HexColorPicker color={value} onChange={color => onChange(color)} />
          <div>
            <Typography
              variant="caption"
              component="div"
              color="textSecondary"
              fontWeight={300}
              textTransform="uppercase"
            >
              {t('hex')}
            </Typography>
            <Input
              fullWidth
              inputRef={popoverInputRef}
              onChange={handleChange}
              onBlur={handleBlur}
              defaultValue={value}
              onFocus={() => (isPopoverInputFocused.current = true)}
              endAdornment={
                <InputAdornment position="end">
                  <ColorButton style={{ background: value }} />
                </InputAdornment>
              }
            />
          </div>
          <Stack direction="row" spacing={1.5}>
            <TextField
              onChange={handleRgbChange}
              value={rgbColor.r}
              name="r"
              size="small"
              type="number"
              label={t('red')}
              slotProps={{ inputLabel: { shrink: true } }}
            />
            <TextField
              onChange={handleRgbChange}
              value={rgbColor.g}
              name="g"
              size="small"
              type="number"
              label={t('green')}
              slotProps={{ inputLabel: { shrink: true } }}
            />
            <TextField
              onChange={handleRgbChange}
              value={rgbColor.b}
              name="b"
              size="small"
              type="number"
              label={t('blue')}
              slotProps={{ inputLabel: { shrink: true } }}
            />
          </Stack>
        </ColorPicker>
      </Popover>
    </div>
  );
}
