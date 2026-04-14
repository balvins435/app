import { StyleSheet, Text, View } from 'react-native';

import { AppTheme } from '@/constants/app-theme';

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
};

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 4,
    marginBottom: AppTheme.spacing.md,
  },
  title: {
    color: AppTheme.colors.text,
    fontSize: 24,
    fontFamily: AppTheme.fonts.heading,
  },
  subtitle: {
    color: AppTheme.colors.textMuted,
    fontSize: 14,
    lineHeight: 20,
  },
});
