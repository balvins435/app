import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, TextInput, View } from 'react-native';

import { AppTheme } from '@/constants/app-theme';

type SearchInputProps = {
  value: string;
  placeholder?: string;
  onChangeText: (value: string) => void;
};

export default function SearchInput({
  value,
  placeholder = 'Search prayers, saints, seasons',
  onChangeText,
}: SearchInputProps) {
  return (
    <View style={styles.container}>
      <Ionicons color={AppTheme.colors.textMuted} name="search-outline" size={18} />
      <TextInput
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={AppTheme.colors.textSoft}
        style={styles.input}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: AppTheme.spacing.sm,
    backgroundColor: AppTheme.colors.card,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: AppTheme.colors.border,
    paddingHorizontal: AppTheme.spacing.md,
    paddingVertical: 14,
  },
  input: {
    flex: 1,
    color: AppTheme.colors.text,
    fontSize: 15,
    padding: 0,
  },
});
