'use client';

import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  function toggleMode() {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <Button onClick={toggleMode} size="icon" variant="outline">
      <Icons.sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Icons.moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
