import { Platform } from 'react-native';

export const AppTheme = {
  colors: {
    background: '#120F0D',
    backgroundAlt: '#1C1714',
    card: '#231D19',
    cardMuted: '#2B241F',
    border: '#3A3029',
    text: '#F7F1E8',
    textMuted: '#C9BBAA',
    textSoft: '#9F8F80',
    accent: '#D9A65A',
    accentStrong: '#F0C27B',
    success: '#96C17D',
    overlay: 'rgba(18, 15, 13, 0.72)',
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
