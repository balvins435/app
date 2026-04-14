import { StyleSheet, Text, View } from 'react-native';

import { AppTheme } from '@/constants/app-theme';

type VerseCardProps = {
  reference: string;
  verse: string;
};

export default function VerseCard({ reference, verse }: VerseCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.kicker}>Today&apos;s meditation</Text>
      <Text style={styles.verse}>{verse}</Text>
      <Text style={styles.reference}>{reference}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: AppTheme.colors.card,
    borderRadius: AppTheme.radius.lg,
    borderWidth: 1,
    borderColor: AppTheme.colors.border,
    padding: AppTheme.spacing.lg,
    gap: AppTheme.spacing.sm,
    ...AppTheme.shadows.card,
  },
  kicker: {
    color: AppTheme.colors.accentStrong,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  verse: {
    color: AppTheme.colors.text,
    fontSize: 20,
    lineHeight: 30,
    fontFamily: AppTheme.fonts.heading,
  },
  reference: {
    color: AppTheme.colors.textMuted,
    fontSize: 14,
    fontWeight: '600',
  },
});
