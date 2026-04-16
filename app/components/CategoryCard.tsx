import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';

import { getPrayerCount } from '@/app/data/prayers';
import { PrayerSubcategory } from '@/app/types/prayer';
import { AppTheme } from '@/constants/app-theme';

type CategoryCardProps = {
  item: PrayerSubcategory;
  onPress: (item: PrayerSubcategory) => void;
};

export default function CategoryCard({ item, onPress }: CategoryCardProps) {
  return (
    <Pressable accessibilityRole="button" onPress={handlePress} style={styles.pressable}>
      <ImageBackground imageStyle={styles.image} source={item.image} style={styles.imageWrap}>
        <View style={styles.overlay}>
          <View style={styles.meta}>
            <Text numberOfLines={2} style={styles.title}>
              {item.title}
            </Text>
            <Text numberOfLines={2} style={styles.description}>
              {item.description}
            </Text>
            <Text style={styles.count}>{getPrayerCount(item)} prayers</Text>
          </View>
        </View>
      </ImageBackground>
    </Pressable>
  );

  function handlePress() {
    onPress(item);
  }
}

const styles = StyleSheet.create({
  pressable: {
    marginRight: AppTheme.spacing.md,
  },
  imageWrap: {
    width: 140,
    height: 150,
    justifyContent: 'flex-end',
  },
  image: {
    borderRadius: 16,
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    borderRadius: 16,
    padding: AppTheme.spacing.md,
    backgroundColor: 'rgba(0, 0, 0, 0.42)',
  },
  meta: {
    gap: 6,
  },
  title: {
    color: AppTheme.colors.text,
    fontSize: 22,
    fontFamily: AppTheme.fonts.heading,
    lineHeight: 28,
  },
  description: {
    color: '#D0D0D0',
    fontSize: 13,
    lineHeight: 18,
  },
  count: {
    marginTop: 2,
    color: AppTheme.colors.white,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.4,
    textTransform: 'uppercase',
  },
});
