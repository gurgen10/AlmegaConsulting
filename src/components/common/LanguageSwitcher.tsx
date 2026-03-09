'use client';

import { Box, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

const LANGUAGES = [
  { code: 'en', label: 'EN' },
  { code: 'ru', label: 'RU' },
  { code: 'am', label: 'AM' },
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [selectedLang, setSelectedLang] = useState(() => {
    if (typeof window !== 'undefined') {
      const match = document.cookie.match(/locale=([^;]+)/);
      return match ? match[1] : 'en';
    }
    return 'en';
  });

  const handleChange = (event: SelectChangeEvent<string>) => {
    const lang = event.target.value;
    setSelectedLang(lang);
    document.cookie = `locale=${lang};path=/`;
    router.push(pathname);
    router.refresh();
  };

  return (
    <Box>
      <Select
        value={selectedLang}
        onChange={handleChange}
        size="small"
        variant="outlined"
        sx={{ minWidth: 80 }}
        renderValue={() => LANGUAGES.find(l => l.code === selectedLang)?.label}
        MenuProps={{
          disableScrollLock: true,
        }}
      >
        {LANGUAGES.filter(({ code }) => code !== selectedLang).map(({ code, label }) => (
          <MenuItem key={code} value={code}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
}
