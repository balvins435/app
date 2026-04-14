import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Prayer } from '@/app/types/prayer';
import { AppTheme } from '@/constants/app-theme';

type PrayerCardProps = {
  prayer: Prayer;
  compact?: boolean;
};

export default function PrayerCard({ prayer, compact = false }: PrayerCardProps) {
  const router = useRouter();

  return (
    <Pressable
      accessibilityRole="button"
      onPress={() => router.push(`/prayer/${prayer.id}`)}
      style={[styles.card, compact && styles.compactCard]}>
      <View style={styles.row}>
        <View style={styles.iconWrap}>
          <MaterialCommunityIcons
            color={AppTheme.colors.accentStrong}
            name="book-cross"
            size={compact ? 18 : 20}
          />
        </View>
        <View style={styles.meta}>
          <Text style={styles.duration}>{prayer.duration}</Text>
          <Text numberOfLines={1} style={styles.tagline}>
            {prayer.tags.join(' • ')}
          </Text>
        </View>
      </View>
      <Text style={styles.title}>{prayer.title}</Text>
      <Text numberOfLines={compact ? 2 : 3} style={styles.excerpt}>
        {prayer.excerpt}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: AppTheme.colors.card,
    borderRadius: AppTheme.radius.lg,
    borderWidth: 1,
    borderColor: AppTheme.colors.border,
    padding: AppTheme.spacing.md,
    gap: AppTheme.spacing.sm,
    ...AppTheme.shadows.card,
  },
  compactCard: {
    minHeight: 156,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: AppTheme.spacing.sm,
  },
  iconWrap: {
    width: 38,
    height: 38,
    borderRadius: AppTheme.radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppTheme.colors.backgroundAlt,
  },
  meta: {
    flex: 1,
    gap: 2,
  },
  duration: {
    color: AppTheme.colors.accentStrong,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.4,
    textTransform: 'uppercase',
  },
  tagline: {
    color: AppTheme.colors.textSoft,
    fontSize: 12,
  },
  title: {
    color: AppTheme.colors.text,
    fontSize: 20,
    lineHeight: 26,
    fontFamily: AppTheme.fonts.heading,
  },
  excerpt: {
    color: AppTheme.colors.textMuted,
    fontSize: 14,
    lineHeight: 22,
  },
});
