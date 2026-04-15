import { useLayoutEffect, useMemo, useState } from 'react';
import { FlatList, ImageBackground, ListRenderItemInfo, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import PrayerSelectorSheet from '@/app/components/PrayerSelectorSheet';
import PrayerListItem from '@/app/components/PrayerListItem';
import { getCategoryById, getSubcategoryById } from '@/app/data/prayers';
import { Prayer, PrayerListScreenProps, PrayerSelectorOption } from '@/app/types/prayer';
import { AppTheme } from '@/constants/app-theme';

export default function PrayerListScreen({ navigation, route }: PrayerListScreenProps) {
  const [selectorPrayer, setSelectorPrayer] = useState<Prayer | null>(null);
  const category = useMemo(
    () => getCategoryById(route.params.categoryId),
    [route.params.categoryId],
  );
  const subcategory = useMemo(
    () => getSubcategoryById(route.params.categoryId, route.params.subcategoryId),
    [route.params.categoryId, route.params.subcategoryId],
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: subcategory?.title ?? category?.title ?? 'Prayers',
    });
  }, [category?.title, navigation, subcategory?.title]);

  const prayers = subcategory?.prayers ?? [];

  return (
    <SafeAreaView edges={['bottom']} style={styles.safeArea}>
      <>
        <FlatList
          contentContainerStyle={styles.content}
          data={prayers}
          ItemSeparatorComponent={ItemSeparator}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <View style={styles.headerBlock}>
              <ImageBackground imageStyle={styles.heroImage} source={subcategory?.image} style={styles.hero}>
                <View style={styles.heroOverlay}>
                  <Text style={styles.eyebrow}>{category?.title}</Text>
                  <Text style={styles.heroTitle}>{subcategory?.title}</Text>
                  <Text style={styles.heroDescription}>{subcategory?.description}</Text>
                  <Text style={styles.heroMeta}>{subcategory?.featuredLabel}</Text>
                </View>
              </ImageBackground>
            </View>
          }
        />
        <PrayerSelectorSheet
          onClose={handleCloseSelector}
          onSelect={handleSelectOption}
          options={selectorPrayer?.selectorOptions ?? []}
          prompt={selectorPrayer?.selectorPrompt ?? 'Select'}
          title={selectorPrayer?.title ?? 'Prayer'}
          visible={Boolean(selectorPrayer)}
        />
      </>
    </SafeAreaView>
  );

  function renderItem({ item }: ListRenderItemInfo<Prayer>) {
    return <PrayerListItem onPress={handlePress} prayer={item} />;
  }

  function handlePress(prayer: Prayer) {
    if (prayer.selectorOptions?.length) {
      setSelectorPrayer(prayer);
      return;
    }

    navigation.navigate('PrayerDetail', {
      categoryId: route.params.categoryId,
      subcategoryId: route.params.subcategoryId,
      prayerId: prayer.id,
    });
  }

  function handleCloseSelector() {
    setSelectorPrayer(null);
  }

  function handleSelectOption(option: PrayerSelectorOption) {
    setSelectorPrayer(null);
    navigation.navigate('PrayerDetail', {
      categoryId: route.params.categoryId,
      subcategoryId: route.params.subcategoryId,
      prayerId: option.prayerId,
    });
  }
}

function keyExtractor(item: Prayer) {
  return item.id;
}

function ItemSeparator() {
  return <View style={styles.separator} />;
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
  headerBlock: {
    marginBottom: AppTheme.spacing.lg,
  },
  hero: {
    height: 230,
    justifyContent: 'flex-end',
  },
  heroImage: {
    borderRadius: 20,
  },
  heroOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: AppTheme.spacing.lg,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.34)',
  },
  eyebrow: {
    color: '#E5CB9A',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.1,
    textTransform: 'uppercase',
    marginBottom: 6,
  },
  heroTitle: {
    color: AppTheme.colors.text,
    fontSize: 28,
    lineHeight: 34,
    fontFamily: AppTheme.fonts.heading,
    marginBottom: 8,
  },
  heroDescription: {
    color: '#D7D7D7',
    fontSize: 14,
    lineHeight: 21,
  },
  heroMeta: {
    marginTop: 12,
    color: AppTheme.colors.accentStrong,
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  separator: {
    height: AppTheme.spacing.md,
  },
});
