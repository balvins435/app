import { useLayoutEffect, useMemo } from 'react';
import { FlatList, ListRenderItemInfo, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import PrayerCard from '@/app/components/PrayerCard';
import SectionHeader from '@/app/components/SectionHeader';
import { getCategoryById } from '@/app/data/prayers';
import { CategoryScreenProps, PrayerSubcategory } from '@/app/types/prayer';
import { AppTheme } from '@/constants/app-theme';

export default function CategoryScreen({ navigation, route }: CategoryScreenProps) {
  const category = useMemo(
    () => getCategoryById(route.params.categoryId),
    [route.params.categoryId],
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: category?.title ?? 'Category',
    });
  }, [category?.title, navigation]);

  const items = category?.items ?? [];

  return (
    <SafeAreaView edges={['bottom']} style={styles.safeArea}>
      <FlatList
        contentContainerStyle={styles.content}
        data={items}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <SectionHeader
            subtitle={category?.description}
            title={category?.title ?? 'Category'}
            trailingText={`${items.length} collections`}
          />
        }
      />
    </SafeAreaView>
  );

  function renderItem({ item }: ListRenderItemInfo<PrayerSubcategory>) {
    return (
      <View style={styles.cardWrap}>
        <PrayerCard onPress={handlePress} prayer={toPreviewPrayer(item)} />
      </View>
    );
  }

  function handlePress(prayer: { id: string }) {
    navigation.navigate('PrayerList', {
      categoryId: route.params.categoryId,
      subcategoryId: prayer.id,
    });
  }

  function toPreviewPrayer(item: PrayerSubcategory) {
    return {
      id: item.id,
      title: item.title,
      content: item.description,
    };
  }
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
  cardWrap: {
    marginBottom: AppTheme.spacing.md,
  },
});
