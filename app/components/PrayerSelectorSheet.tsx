import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';

import { PrayerSelectorOption } from '@/app/types/prayer';
import { AppTheme } from '@/constants/app-theme';

type PrayerSelectorSheetProps = {
  title: string;
  prompt: string;
  options: PrayerSelectorOption[];
  visible: boolean;
  onClose: () => void;
  onSelect: (option: PrayerSelectorOption) => void;
};

export default function PrayerSelectorSheet({
  title,
  prompt,
  options,
  visible,
  onClose,
  onSelect,
}: PrayerSelectorSheetProps) {
  return (
    <Modal
      animationType="fade"
      onRequestClose={onClose}
      transparent
      visible={visible}>
      <View style={styles.backdrop}>
        <Pressable onPress={onClose} style={styles.overlay} />
        <View style={styles.sheet}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.card}>
            <View style={styles.header}>
              <Text style={styles.headerText}>{prompt}</Text>
            </View>
            {options.map((option) => (
              <Pressable
                accessibilityRole="button"
                key={option.prayerId}
                onPress={() => onSelect(option)}
                style={styles.option}>
                <Text style={styles.optionText}>{option.label}</Text>
              </Pressable>
            ))}
            <Pressable accessibilityRole="button" onPress={onClose} style={styles.cancelButton}>
              <Text style={styles.cancelText}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
  },
  overlay: {
    flex: 1,
  },
  sheet: {
    paddingHorizontal: AppTheme.spacing.md,
    paddingBottom: AppTheme.spacing.lg,
  },
  title: {
    color: AppTheme.colors.text,
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: AppTheme.spacing.sm,
  },
  card: {
    overflow: 'hidden',
    borderRadius: 22,
    backgroundColor: '#2A2A2A',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(255,255,255,0.15)',
  },
  headerText: {
    color: '#B7B7B7',
    fontSize: 15,
    fontWeight: '500',
  },
  option: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 96,
    paddingHorizontal: AppTheme.spacing.lg,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(255,255,255,0.15)',
  },
  optionText: {
    color: AppTheme.colors.text,
    fontSize: 19,
    lineHeight: 28,
    textAlign: 'center',
    fontWeight: '500',
  },
  cancelButton: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 86,
  },
  cancelText: {
    color: '#FF4E57',
    fontSize: 20,
    fontWeight: '500',
  },
});
