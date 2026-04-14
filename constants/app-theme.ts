import { Platform } from 'react-native';

export const AppTheme = {
  colors: {
    background: '#0B0B0B',
    backgroundAlt: '#151515',
    card: '#171717',
    cardMuted: '#1F1F1F',
    border: '#262626',
    text: '#FFFFFF',
    textMuted: '#B3B3B3',
    textSoft: '#8C8C8C',
    accent: '#D5A24E',
    accentStrong: '#EABB67',
    success: '#96C17D',
    overlay: 'rgba(11, 11, 11, 0.68)',
    white: '#FFFFFF',
  },
  spacing: {
    xs: 6,
    sm: 10,
    md: 16,
    lg: 20,
    xl: 28,
    xxl: 36,
  },
  radius: {
    sm: 12,
    md: 18,
    lg: 24,
    pill: 999,
  },
  fonts: {
    heading: Platform.select({
      ios: 'Georgia',
      android: 'serif',
      default: 'serif',
    }),
    body: Platform.select({
      ios: 'System',
      android: 'sans-serif',
      default: 'sans-serif',
    }),
  },
  shadows: {
    card: {
      shadowColor: '#000000',
      shadowOpacity: 0.2,
      shadowRadius: 16,
      shadowOffset: { width: 0, height: 10 },
      elevation: 6,
    },
  },
} as const;
