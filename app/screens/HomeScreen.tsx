import { Ionicons } from '@expo/vector-icons';
import { useMemo } from 'react';
import { FlatList, ListRenderItemInfo, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import CategoryCard from '@/app/components/CategoryCard';
import PrayerCard from '@/app/components/PrayerCard';
import SectionHeader from '@/app/components/SectionHeader';
import SeasonBanner from '@/app/components/SeasonBanner';
import VerseCard from '@/app/components/VerseCard';
import { getCategoryById, getFavoritePrayerRecords, getTodayExperience } from '@/app/data/prayers';
import { usePrayerApp } from '@/app/state/PrayerAppContext';
import {
  HomeScreenProps,
  PrayerCategory,
  PrayerRecord,
  PrayerSubcategory,
} from '@/app/types/prayer';
import { AppTheme } from '@/constants/app-theme';

const homeCategoryIds = ['daily_prayers', 'rosary', 'novenas', 'saints'] as const;

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const { favoriteIds } = usePrayerApp();
  const todayExperience = useMemo(() => getTodayExperience(), []);
  const favoriteRecords = useMemo(
    () => getFavoritePrayerRecords(favoriteIds).slice(0, 4),
    [favoriteIds],
  );
  const homeSections = useMemo(
    () =>
      homeCategoryIds
        .map((categoryId) => getCategoryById(categoryId))
        .filter((category): category is PrayerCategory => Boolean(category)),
    [],
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        contentContainerStyle={styles.content}
        data={homeSections}
        keyExtractor={categoryKeyExtractor}
        ListHeaderComponent={
          <View>
            <HomeHeader
              favoriteCount={favoriteIds.length}
              onOpenFavorites={handleOpenFavorites}
              onOpenLibrary={handleOpenLibrary}
              onOpenToday={handleOpenToday}
              title={todayExperience.title}
            />
            <VerseCard reference={todayExperience.reference} verse={todayExperience.verse} />
            <SeasonBanner
              season={todayExperience.season}
              subtitle={todayExperience.subtitle}
              title="Current Season"
            />
          </View>
        }
        ListFooterComponent={<FavoritesSection favorites={favoriteRecords} onPress={handleOpenPrayer} />}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );

  function renderItem({ item }: ListRenderItemInfo<PrayerCategory>) {
    return (
      <View style={styles.sectionBlock}>
        <Pressable
          accessibilityRole="button"
          onPress={handleOpenCategory}
          style={styles.sectionPressable}>
          <SectionHeader subtitle={item.description} title={item.title} trailingText="See all" />
        </Pressable>
        <FlatList
          contentContainerStyle={styles.horizontalListContent}
          data={item.items}
          horizontal
          keyExtractor={subcategoryKeyExtractor}
          renderItem={({ item: subcategory }) => renderSubcategory(item.id, subcategory)}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );

    function handleOpenCategory() {
      navigation.navigate('Category', { categoryId: item.id });
    }
  }

  function renderSubcategory(categoryId: string, item: PrayerSubcategory) {
    return (
      <CategoryCard
        item={item}
        onPress={(selectedItem) =>
          navigation.navigate('PrayerList', {
            categoryId,
            subcategoryId: selectedItem.id,
          })
        }
      />
    );
  }

  function handleOpenPrayer(record: PrayerRecord) {
    navigation.navigate('PrayerDetail', record.route);
  }

  function handleOpenLibrary() {
    navigation.navigate('Library');
  }

  function handleOpenFavorites() {
    navigation.navigate('Favorites');
  }

  function handleOpenToday() {
    navigation.navigate('Today');
  }
}

function categoryKeyExtractor(item: PrayerCategory) {
  return item.id;
}

function subcategoryKeyExtractor(item: PrayerSubcategory) {
  return item.id;
}

type HomeHeaderProps = {
  title: string;
  favoriteCount: number;
  onOpenLibrary: () => void;
  onOpenToday: () => void;
  onOpenFavorites: () => void;
};

function HomeHeader({
  title,
  favoriteCount,
  onOpenLibrary,
  onOpenToday,
  onOpenFavorites,
}: HomeHeaderProps) {
  return (
    <View style={styles.header}>
      <HeaderIcon accessibilityLabel="Open library" name="search-outline" onPress={onOpenLibrary} />
      <View style={styles.headerCenter}>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
      <View style={styles.headerRight}>
        <Pressable accessibilityRole="button" onPress={onOpenToday} style={styles.coinBadge}>
          <Ionicons color={AppTheme.colors.text} name="sparkles-outline" size={14} />
          <Text style={styles.coinText}>Today</Text>
        </Pressable>
        <HeaderIcon
          accessibilityLabel={`Open favorites with ${favoriteCount} saved prayers`}
          name="heart-outline"
          onPress={onOpenFavorites}
        />
      </View>
    </View>
  );
}

type HeaderIconProps = {
  name: keyof typeof Ionicons.glyphMap;
  accessibilityLabel: string;
  onPress: () => void;
};

function HeaderIcon({ name, accessibilityLabel, onPress }: HeaderIconProps) {
  return (
    <Pressable
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="button"
      onPress={onPress}
      style={styles.headerIcon}>
      <Ionicons color={AppTheme.colors.text} name={name} size={20} />
    </Pressable>
  );
}

type FavoritesSectionProps = {
  favorites: PrayerRecord[];
  onPress: (record: PrayerRecord) => void;
};

function FavoritesSection({ favorites, onPress }: FavoritesSectionProps) {
  return (
    <View style={styles.sectionBlock}>
      <View style={styles.sectionPressable}>
        <SectionHeader
          subtitle="Your saved prayers stay one tap away."
          title="Favorites"
          trailingText={`${favorites.length} saved`}
        />
      </View>
      {favorites.length > 0 ? (
        <View style={styles.favoriteStack}>
          {favorites.map((record) => (
            <PrayerCard key={record.prayer.id} onPress={() => onPress(record)} prayer={record.prayer} />
          ))}
        </View>
      ) : (
        <View style={styles.emptyCard}>
          <Text style={styles.emptyTitle}>No favorites yet</Text>
          <Text style={styles.emptyText}>
            Save prayers from the detail screen and they will appear here.
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: AppTheme.colors.background,
  },
  content: {
    paddingTop: AppTheme.spacing.sm,
    paddingBottom: AppTheme.spacing.xxl,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: AppTheme.spacing.xl,
    paddingHorizontal: AppTheme.spacing.lg,
  },
  headerCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: AppTheme.colors.text,
    fontSize: 24,
    fontFamily: AppTheme.fonts.heading,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: AppTheme.spacing.sm,
  },
  headerIcon: {
    width: 42,
    height: 42,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppTheme.colors.card,
    borderWidth: 1,
    borderColor: AppTheme.colors.border,
  },
  coinBadge: {
    height: 42,
    borderRadius: 14,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: AppTheme.colors.card,
    borderWidth: 1,
    borderColor: AppTheme.colors.border,
  },
  coinText: {
    color: AppTheme.colors.text,
    fontSize: 14,
    fontWeight: '700',
  },
  sectionPressable: {
    paddingHorizontal: AppTheme.spacing.lg,
    marginBottom: AppTheme.spacing.md,
  },
  sectionBlock: {
    marginBottom: AppTheme.spacing.xl,
  },
  horizontalListContent: {
    paddingHorizontal: AppTheme.spacing.lg,
  },
  favoriteStack: {
    gap: AppTheme.spacing.md,
    paddingHorizontal: AppTheme.spacing.lg,
  },
  emptyCard: {
    backgroundColor: AppTheme.colors.card,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: AppTheme.colors.border,
    padding: AppTheme.spacing.lg,
    marginHorizontal: AppTheme.spacing.lg,
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
