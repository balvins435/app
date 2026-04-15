import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Prayer } from '@/app/types/prayer';
import { AppTheme } from '@/constants/app-theme';

type PrayerCardProps = {
  prayer: Prayer;
  onPress: (prayer: Prayer) => void;
};

export default function PrayerCard({ prayer, onPress }: PrayerCardProps) {
  return (
    <Pressable accessibilityRole="button" onPress={handlePress} style={styles.card}>
      <View style={styles.topRow}>
        <Text style={styles.meta}>{prayer.estimatedDuration}</Text>
        <Text style={styles.meta}>{prayer.tags[0]}</Text>
      </View>
      <View style={styles.leading}>
        <View style={styles.iconWrap}>
          <Ionicons color={AppTheme.colors.accentStrong} name="book-outline" size={20} />
        </View>
        <View style={styles.copy}>
          <Text numberOfLines={2} style={styles.title}>
            {prayer.title}
          </Text>
          <Text numberOfLines={2} style={styles.subtitle}>
            {prayer.excerpt}
          </Text>
        </View>
      </View>
      <Ionicons color={AppTheme.colors.textMuted} name="chevron-forward" size={20} />
    </Pressable>
  );

  function handlePress() {
    onPress(prayer);
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: AppTheme.colors.card,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: AppTheme.colors.border,
    paddingHorizontal: AppTheme.spacing.md,
    paddingVertical: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: AppTheme.spacing.md,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  meta: {
    color: AppTheme.colors.accentStrong,
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.6,
  },
  leading: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 14,
  },
  iconWrap: {
    width: 42,
    height: 42,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppTheme.colors.backgroundAlt,
  },
  copy: {
    flex: 1,
  },
  title: {
    color: AppTheme.colors.text,
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },
  subtitle: {
    color: AppTheme.colors.textMuted,
    fontSize: 13,
    lineHeight: 18,
  },
});
