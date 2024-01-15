import { PropsWithChildren } from 'react';
import { ReduxProvider } from './redux-provider';
import { ThemeProvider } from './theme-provider';

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ReduxProvider>
      <ThemeProvider
        attribute='class'
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </ReduxProvider>
  );
};
