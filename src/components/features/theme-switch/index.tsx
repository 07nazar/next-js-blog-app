import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export const ThemeSwitch = () => {
  const { setTheme, resolvedTheme, theme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={'ghost'}>
          {resolvedTheme === 'dark' ? <Moon /> : <Sun />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='data-[state=open]:animate-in data-[state=closed]:animate-out'>
        <DropdownMenuItem
          disabled={theme === 'light'}
          onClick={() => setTheme('light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          disabled={theme === 'dark'}
          onClick={() => setTheme('dark')}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          disabled={theme === 'system'}
          onClick={() => setTheme('system')}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
