import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Prayer } from '@/app/types/prayer';
import { AppTheme } from '@/constants/app-theme';

type PrayerListItemProps = {
  prayer: Prayer;
  onPress: (prayer: Prayer) => void;
};

export default function PrayerListItem({ prayer, onPress }: PrayerListItemProps) {
  return (
    <Pressable accessibilityRole="button" onPress={handlePress} style={styles.card}>
      <View style={styles.row}>
        <View style={styles.iconWrap}>
          <Ionicons color={AppTheme.colors.accentStrong} name="document-text-outline" size={20} />
        </View>
        <Text numberOfLines={2} style={styles.title}>
          {prayer.title}
        </Text>
      </View>
      <Ionicons color={AppTheme.colors.textMuted} name="chevron-forward" size={18} />
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
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: AppTheme.spacing.md,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
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
  title: {
    flex: 1,
    color: AppTheme.colors.text,
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 22,
  },
});
