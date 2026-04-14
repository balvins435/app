import { Stack, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import AppScreen from '@/app/components/AppScreen';
import { getPrayerById } from '@/app/lib/prayers';
import { AppTheme } from '@/constants/app-theme';

export default function PrayerDetailRoute() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const prayer = id ? getPrayerById(id) : undefined;

  if (!prayer) {
    return (
      <AppScreen>
        <Stack.Screen options={{ title: 'Prayer' }} />
        <View style={styles.emptyState}>
          <Text style={styles.emptyTitle}>Prayer not found</Text>
          <Text style={styles.emptyText}>
            The requested prayer could not be loaded from the offline library.
          </Text>
        </View>
      </AppScreen>
    );
  }

  return (
    <AppScreen>
      <Stack.Screen options={{ title: prayer.title, headerLargeTitle: false }} />

      <View style={styles.hero}>
        <Text style={styles.duration}>{prayer.duration}</Text>
        <Text style={styles.title}>{prayer.title}</Text>
        <Text style={styles.excerpt}>{prayer.excerpt}</Text>
      </View>

      <View style={styles.tags}>
        {prayer.tags.map((tag) => (
          <View key={tag} style={styles.tag}>
            <Text style={styles.tagText}>{tag}</Text>
          </View>
        ))}
      </View>

      <View style={styles.bodyCard}>
        <Text style={styles.bodyText}>{prayer.content}</Text>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  hero: {
    gap: AppTheme.spacing.sm,
    marginBottom: AppTheme.spacing.lg,
  },
  duration: {
    color: AppTheme.colors.accentStrong,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  title: {
    color: AppTheme.colors.text,
    fontSize: 34,
    lineHeight: 40,
    fontFamily: AppTheme.fonts.heading,
  },
  excerpt: {
    color: AppTheme.colors.textMuted,
    fontSize: 15,
    lineHeight: 23,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: AppTheme.spacing.sm,
    marginBottom: AppTheme.spacing.lg,
  },
  tag: {
    backgroundColor: AppTheme.colors.cardMuted,
    borderRadius: AppTheme.radius.pill,
    borderWidth: 1,
    borderColor: AppTheme.colors.border,
    paddingHorizontal: AppTheme.spacing.md,
    paddingVertical: 8,
  },
  tagText: {
    color: AppTheme.colors.textMuted,
    fontSize: 12,
    fontWeight: '600',
  },
  bodyCard: {
    backgroundColor: AppTheme.colors.card,
    borderRadius: AppTheme.radius.lg,
    borderWidth: 1,
    borderColor: AppTheme.colors.border,
    padding: AppTheme.spacing.lg,
  },
  bodyText: {
    color: AppTheme.colors.text,
    fontSize: 17,
    lineHeight: 30,
  },
  emptyState: {
    paddingVertical: AppTheme.spacing.xxl,
    alignItems: 'center',
    gap: AppTheme.spacing.sm,
  },
  emptyTitle: {
    color: AppTheme.colors.text,
    fontSize: 24,
    fontFamily: AppTheme.fonts.heading,
  },
  emptyText: {
    color: AppTheme.colors.textMuted,
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 22,
  },
});
