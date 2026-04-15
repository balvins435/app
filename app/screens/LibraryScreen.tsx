import { useMemo, useState } from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import CollectionListItem from '@/app/components/CollectionListItem';
import FilterChip from '@/app/components/FilterChip';
import SearchInput from '@/app/components/SearchInput';
import SectionHeader from '@/app/components/SectionHeader';
import { prayerCategories, searchPrayerRecords } from '@/app/data/prayers';
import { LibraryScreenProps, PrayerSubcategory } from '@/app/types/prayer';
import { AppTheme } from '@/constants/app-theme';

const filterChips = [
  { id: 'all', label: 'All' },
  { id: 'daily_prayers', label: 'Daily' },
  { id: 'rosary', label: 'Rosary' },
  { id: 'novenas', label: 'Novenas' },
  { id: 'saints', label: 'Saints' },
  { id: 'easter', label: 'Easter' },
  { id: 'lent', label: 'Lent' },
] as const;

export default function LibraryScreen({ navigation }: LibraryScreenProps) {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const matchingRecords = useMemo(
    () => searchPrayerRecords(query, activeFilter),
    [activeFilter, query],
  );

  const sections = useMemo(() => {
    const routeKeys = new Set(
      matchingRecords.map((record) => `${record.category.id}:${record.subcategory.id}`),
    );

    return prayerCategories
      .map((category) => ({
        title: category.title,
        subtitle: category.description,
        data: category.items.filter((item) =>
          routeKeys.has(`${category.id}:${item.id}`),
        ),
        categoryId: category.id,
      }))
      .filter((section) => section.data.length > 0);
  }, [matchingRecords]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <SectionList
        contentContainerStyle={styles.content}
        keyExtractor={keyExtractor}
        ListHeaderComponent={
          <View>
            <View style={styles.header}>
              <Text style={styles.title}>Library</Text>
              <Text style={styles.subtitle}>
                Search the offline collection by theme, season, saint, or devotion.
              </Text>
            </View>
            <SearchInput onChangeText={setQuery} value={query} />
            <FlatList
              contentContainerStyle={styles.chips}
              data={filterChips}
              horizontal
              keyExtractor={chipKeyExtractor}
              renderItem={({ item }) => (
                <FilterChip
                  label={item.label}
                  onPress={() => setActiveFilter(item.id)}
                  selected={activeFilter === item.id}
                />
              )}
              showsHorizontalScrollIndicator={false}
            />
            <Text style={styles.resultCount}>{matchingRecords.length} prayers found</Text>
          </View>
        }
        renderItem={renderItem}
        renderSectionHeader={({ section }) => (
          <SectionHeader subtitle={section.subtitle} title={section.title} />
        )}
        sections={sections}
        showsVerticalScrollIndicator={false}
        stickySectionHeadersEnabled={false}
      />
    </SafeAreaView>
  );

  function renderItem({
    item,
    section,
  }: ListRenderItemInfo<PrayerSubcategory> & { section: { categoryId: string } }) {
    return (
      <View style={styles.sectionItem}>
        <CollectionListItem
          item={item}
          onPress={() =>
            navigation.navigate('PrayerList', {
              categoryId: section.categoryId,
              subcategoryId: item.id,
            })
          }
        />
      </View>
    );
  }
}

function chipKeyExtractor(item: { id: string }) {
  return item.id;
}

function keyExtractor(item: PrayerSubcategory) {
  return item.id;
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
  chips: {
    paddingTop: AppTheme.spacing.md,
    paddingBottom: AppTheme.spacing.md,
  },
  resultCount: {
    color: AppTheme.colors.textSoft,
    fontSize: 13,
    marginBottom: AppTheme.spacing.md,
  },
  sectionItem: {
    marginBottom: AppTheme.spacing.md,
  },
});
