import { Ionicons } from '@expo/vector-icons';
import { useCallback } from 'react';
import { FlatList, ListRenderItemInfo, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import CategoryCard from '@/app/components/CategoryCard';
import SectionHeader from '@/app/components/SectionHeader';
import VerseCard from '@/app/components/VerseCard';
import { homeVerse, prayerCategories } from '@/app/data/prayers';
import { HomeScreenProps, PrayerCategory, PrayerSubcategory } from '@/app/types/prayer';
import { AppTheme } from '@/constants/app-theme';

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const handleOpenSubcategory = useCallback(
    (categoryId: string, item: PrayerSubcategory) => {
      navigation.navigate('PrayerList', {
        categoryId,
        subcategoryId: item.id,
      });
    },
    [navigation],
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        contentContainerStyle={styles.content}
        data={prayerCategories}
        keyExtractor={categoryKeyExtractor}
        ListHeaderComponent={
          <View>
            <HomeHeader />
            <VerseCard reference={homeVerse.reference} verse={homeVerse.verse} />
          </View>
        }
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
          <SectionHeader
            subtitle={item.description}
            title={item.title}
            trailingText="See all"
          />
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
      navigation.navigate('Category', {
        categoryId: item.id,
      });
    }
  }

  function renderSubcategory(categoryId: string, item: PrayerSubcategory) {
    return (
      <CategoryCard
        item={item}
        onPress={(selectedItem) => handleOpenSubcategory(categoryId, selectedItem)}
      />
    );
  }
}

function categoryKeyExtractor(item: PrayerCategory) {
  return item.id;
}

function subcategoryKeyExtractor(item: PrayerSubcategory) {
  return item.id;
}

function HomeHeader() {
  return (
    <View style={styles.header}>
      <HeaderIcon name="search-outline" />
      <View style={styles.headerCenter}>
        <Text style={styles.headerTitle}>{homeVerse.title}</Text>
      </View>
      <View style={styles.headerRight}>
        <View style={styles.coinBadge}>
          <Ionicons color={AppTheme.colors.text} name="diamond-outline" size={14} />
          <Text style={styles.coinText}>12</Text>
        </View>
        <HeaderIcon name="heart-outline" />
      </View>
    </View>
  );
}

type HeaderIconProps = {
  name: keyof typeof Ionicons.glyphMap;
};

function HeaderIcon({ name }: HeaderIconProps) {
  return (
    <Pressable accessibilityRole="button" style={styles.headerIcon}>
      <Ionicons color={AppTheme.colors.text} name={name} size={20} />
    </Pressable>
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
});
