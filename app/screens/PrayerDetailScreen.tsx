import { useLayoutEffect, useMemo } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { getPrayerById } from '@/app/data/prayers';
import { PrayerDetailScreenProps } from '@/app/types/prayer';
import { AppTheme } from '@/constants/app-theme';

export default function PrayerDetailScreen({ navigation, route }: PrayerDetailScreenProps) {
  const prayer = useMemo(
    () =>
      getPrayerById(
        route.params.categoryId,
        route.params.subcategoryId,
        route.params.prayerId,
      ),
    [route.params.categoryId, route.params.prayerId, route.params.subcategoryId],
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: prayer?.title ?? 'Prayer',
    });
  }, [navigation, prayer?.title]);

  return (
    <SafeAreaView edges={['bottom']} style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <Text style={styles.title}>{prayer?.title ?? 'Prayer not found'}</Text>
          <Text style={styles.body}>{prayer?.content ?? 'This prayer is not available offline yet.'}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: AppTheme.colors.background,
  },
  content: {
    paddingHorizontal: AppTheme.spacing.lg,
    paddingTop: AppTheme.spacing.md,
    paddingBottom: AppTheme.spacing.xxl,
  },
  card: {
    backgroundColor: AppTheme.colors.card,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: AppTheme.colors.border,
    padding: AppTheme.spacing.lg,
  },
  title: {
    color: AppTheme.colors.text,
    fontSize: 28,
    lineHeight: 34,
    fontFamily: AppTheme.fonts.heading,
    marginBottom: AppTheme.spacing.md,
  },
  body: {
    color: '#E0E0E0',
    fontSize: 16,
    lineHeight: 28,
  },
});
