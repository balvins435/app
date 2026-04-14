import { StyleSheet, Text, View } from 'react-native';

import { AppTheme } from '@/constants/app-theme';

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  trailingText?: string;
};

export default function SectionHeader({ title, subtitle, trailingText }: SectionHeaderProps) {
  return (
    <View style={styles.row}>
      <View style={styles.copy}>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>
      {trailingText ? <Text style={styles.trailing}>{trailingText}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: AppTheme.spacing.md,
    marginBottom: AppTheme.spacing.md,
  },
  copy: {
    flex: 1,
    gap: 4,
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
  trailing: {
    color: AppTheme.colors.accentStrong,
    fontSize: 13,
    fontWeight: '700',
  },
});
