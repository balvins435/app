import { StyleSheet, Text, View } from 'react-native';

import { AppTheme } from '@/constants/app-theme';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Legacy Home Screen</Text>
      <Text style={styles.text}>
        The app now uses Expo Router screens in app/(tabs). This file is kept only so older imports do not break during the transition.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: AppTheme.spacing.lg,
    backgroundColor: AppTheme.colors.background,
  },
  title: {
    color: AppTheme.colors.text,
    fontSize: 24,
    fontFamily: AppTheme.fonts.heading,
    marginBottom: AppTheme.spacing.sm,
  },
  text: {
    color: AppTheme.colors.textMuted,
    fontSize: 15,
    lineHeight: 22,
  },
});
