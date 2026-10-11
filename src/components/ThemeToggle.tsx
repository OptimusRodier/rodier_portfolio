'use client';

import React from 'react';
import { ToggleButton, useTheme } from '@/once-ui/components';
import { ui, type Locale } from '@/app/resources/i18n';

export const ThemeToggle: React.FC<{ locale?: Locale }> = ({ locale = 'en' }) => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <ToggleButton
        prefixIcon={theme === 'dark' ? 'sun' : 'moon'}
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        selected={false}
        aria-label={theme === 'light' ? ui[locale].switchToDark : ui[locale].switchToLight}
      />
    </>
  );
};
