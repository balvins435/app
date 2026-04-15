import { useMemo } from 'react';
import { FlatList, ListRenderItemInfo, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import PrayerCard from '@/app/components/PrayerCard';
import { getFavoritePrayerRecords } from '@/app/data/prayers';
import { usePrayerApp } from '@/app/state/PrayerAppContext';
import { FavoritesScreenProps, PrayerRecord } from '@/app/types/prayer';
import { AppTheme } from '@/constants/app-theme';

export default function FavoritesScreen({ navigation }: FavoritesScreenProps) {
  const { favoriteIds } = usePrayerApp();
  const favorites = useMemo(() => getFavoritePrayerRecords(favoriteIds), [favoriteIds]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        contentContainerStyle={styles.content}
        data={favorites}
        keyExtractor={keyExtractor}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.title}>Favorites</Text>
            <Text style={styles.subtitle}>
              Your saved prayers for quick return in quiet moments and busy ones.
            </Text>
          </View>
        }
        ListEmptyComponent={
          <View style={styles.emptyCard}>
            <Text style={styles.emptyTitle}>Nothing saved yet</Text>
            <Text style={styles.emptyText}>
              Tap the heart on any prayer detail screen to build your personal prayer shelf.
            </Text>
          </View>
        }
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );

  function renderItem({ item }: ListRenderItemInfo<PrayerRecord>) {
    return (
      <View style={styles.itemWrap}>
        <PrayerCard
          onPress={() => navigation.navigate('PrayerDetail', item.route)}
          prayer={item.prayer}
        />
      </View>
    );
  }
}

function keyExtractor(item: PrayerRecord) {
  return item.prayer.id;
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
  header: {
    marginBottom: AppTheme.spacing.lg,
  },
  title: {
    color: AppTheme.colors.text,
    fontSize: 34,
    lineHeight: 40,
    fontFamily: AppTheme.fonts.heading,
    marginBottom: 8,
  },
  subtitle: {
    color: AppTheme.colors.textMuted,
    fontSize: 15,
    lineHeight: 22,
  },
  itemWrap: {
    marginBottom: AppTheme.spacing.md,
  },
  emptyCard: {
    backgroundColor: AppTheme.colors.card,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: AppTheme.colors.border,
    padding: AppTheme.spacing.lg,
  },
  emptyTitle: {
    color: AppTheme.colors.text,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  emptyText: {
    color: AppTheme.colors.textMuted,
    fontSize: 14,
    lineHeight: 20,
  },
});
