'use client';

import { Box, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

const LANGUAGES = [
  { code: 'en', label: 'EN', flag: '/images/flags/US.svg' },
  { code: 'ru', label: 'RU', flag: '/images/flags/RU.svg' },
  { code: 'am', label: 'AM', flag: '/images/flags/AM.svg' },
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
        renderValue={() => {
          const lang = LANGUAGES.find(l => l.code === selectedLang);
          return lang ? (
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <Image
                src={lang.flag}
                alt={lang.label}
                width={24}
                height={24}
                style={{ marginRight: 8 }}
              />
            </span>
          ) : (
            ''
          );
        }}
        MenuProps={{
          disableScrollLock: true,
        }}
      >
        {LANGUAGES.filter(({ code }) => code !== selectedLang).map(({ code, label, flag }) => (
          <MenuItem key={code} value={code}>
            <Image src={flag} alt={label} width={24} height={24} style={{ marginRight: 8 }} />
            {label}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
}
