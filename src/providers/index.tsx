import { PropsWithChildren } from 'react';
import { ReduxProvider } from './redux-provider';
import { ThemeProvider } from './theme-provider';
import { AuthProvider } from './auth-provider';

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ReduxProvider>
      <AuthProvider>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </AuthProvider>
    </ReduxProvider>
  );
};
