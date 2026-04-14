import { StyleSheet, Text, View } from 'react-native';

import { AppTheme } from '@/constants/app-theme';

type VerseCardProps = {
  verse: string;
  reference: string;
};

export default function VerseCard({ verse, reference }: VerseCardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.verse}>{verse}</Text>
      <Text style={styles.reference}>{reference}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: AppTheme.spacing.lg,
    marginBottom: AppTheme.spacing.xl,
    gap: AppTheme.spacing.sm,
  },
  verse: {
    color: AppTheme.colors.text,
    fontSize: 22,
    lineHeight: 32,
    textAlign: 'center',
    fontFamily: AppTheme.fonts.heading,
  },
  reference: {
    color: AppTheme.colors.textMuted,
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    letterSpacing: 0.3,
  },
});
