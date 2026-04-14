import { ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { AppTheme } from '@/constants/app-theme';

export const unstable_settings = {
  anchor: '(tabs)',
};

const navigationTheme = {
  dark: true,
  colors: {
    primary: AppTheme.colors.accentStrong,
    background: AppTheme.colors.background,
    card: AppTheme.colors.backgroundAlt,
    text: AppTheme.colors.text,
    border: AppTheme.colors.border,
    notification: AppTheme.colors.accent,
  },
  fonts: {
    regular: {
      fontFamily: AppTheme.fonts.body,
      fontWeight: '400' as const,
    },
    medium: {
      fontFamily: AppTheme.fonts.body,
      fontWeight: '500' as const,
    },
    bold: {
      fontFamily: AppTheme.fonts.body,
      fontWeight: '700' as const,
    },
    heavy: {
      fontFamily: AppTheme.fonts.heading,
      fontWeight: '700' as const,
    },
  },
};

export default function RootLayout() {
  return (
    <ThemeProvider value={navigationTheme}>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: AppTheme.colors.backgroundAlt,
          },
          headerTintColor: AppTheme.colors.text,
          headerTitleStyle: {
            fontFamily: AppTheme.fonts.heading,
          },
          contentStyle: {
            backgroundColor: AppTheme.colors.background,
          },
        }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="prayer/[id]" options={{ title: 'Prayer' }} />
      </Stack>
      <StatusBar style="light" />
    </ThemeProvider>
  );
}
