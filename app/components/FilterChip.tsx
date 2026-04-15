import { Pressable, StyleSheet, Text } from 'react-native';

import { AppTheme } from '@/constants/app-theme';

type FilterChipProps = {
  label: string;
  selected: boolean;
  onPress: () => void;
};

export default function FilterChip({ label, selected, onPress }: FilterChipProps) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={[styles.chip, selected && styles.chipSelected]}>
      <Text style={[styles.label, selected && styles.labelSelected]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: AppTheme.radius.pill,
    borderWidth: 1,
    borderColor: AppTheme.colors.border,
    backgroundColor: AppTheme.colors.card,
    marginRight: AppTheme.spacing.sm,
  },
  chipSelected: {
    backgroundColor: AppTheme.colors.accentStrong,
    borderColor: AppTheme.colors.accentStrong,
  },
  label: {
    color: AppTheme.colors.textMuted,
    fontSize: 13,
    fontWeight: '600',
  },
  labelSelected: {
    color: '#101010',
  },
});
