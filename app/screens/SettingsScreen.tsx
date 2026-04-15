import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { usePrayerApp } from '@/app/state/PrayerAppContext';
import { SettingsScreenProps } from '@/app/types/prayer';
import { AppTheme } from '@/constants/app-theme';

export default function SettingsScreen(_props: SettingsScreenProps) {
  const {
    fontScale,
    teleprompterSpeed,
    readingMode,
    setFontScale,
    setTeleprompterSpeed,
    toggleReadingMode,
  } = usePrayerApp();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.content}>
        <Text style={styles.title}>Settings</Text>
        <Text style={styles.subtitle}>
          Tune the prayer reading experience for calm, focus, and accessibility.
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Default text size</Text>
          <Text style={styles.cardValue}>{fontScale.toFixed(1)}x</Text>
          <View style={styles.row}>
            <ActionButton label="A-" onPress={() => setFontScale(fontScale - 0.1)} />
            <ActionButton label="A+" onPress={() => setFontScale(fontScale + 0.1)} />
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Reading mode</Text>
          <Text style={styles.cardValue}>
            {readingMode === 'focused' ? 'Focused reading' : 'Standard reading'}
          </Text>
          <ActionButton
            label={readingMode === 'focused' ? 'Use standard mode' : 'Use focused mode'}
            onPress={toggleReadingMode}
          />
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Teleprompter speed</Text>
          <Text style={styles.cardValue}>{teleprompterSpeed.toFixed(1)}x</Text>
          <View style={styles.row}>
            <ActionButton
              label="Slower"
              onPress={() => setTeleprompterSpeed(teleprompterSpeed - 0.2)}
            />
            <ActionButton
              label="Faster"
              onPress={() => setTeleprompterSpeed(teleprompterSpeed + 0.2)}
            />
          </View>
        </View>

        <View style={styles.noteCard}>
          <Text style={styles.noteTitle}>Offline-first</Text>
          <Text style={styles.noteBody}>
            The current app experience is fully local, so browsing, favorites, and reading tools
            remain available without a backend connection.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

type ActionButtonProps = {
  label: string;
  onPress: () => void;
};

function ActionButton({ label, onPress }: ActionButtonProps) {
  return (
    <Pressable accessibilityRole="button" onPress={onPress} style={styles.actionButton}>
      <Text style={styles.actionLabel}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: AppTheme.colors.background,
  },
  content: {
    paddingHorizontal: AppTheme.spacing.lg,
    paddingTop: AppTheme.spacing.md,
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
    marginBottom: AppTheme.spacing.lg,
  },
  card: {
    backgroundColor: AppTheme.colors.card,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: AppTheme.colors.border,
    padding: AppTheme.spacing.lg,
    marginBottom: AppTheme.spacing.md,
  },
  cardTitle: {
    color: AppTheme.colors.textMuted,
    fontSize: 14,
    marginBottom: 8,
  },
  cardValue: {
    color: AppTheme.colors.text,
    fontSize: 22,
    fontWeight: '700',
    marginBottom: AppTheme.spacing.md,
  },
  row: {
    flexDirection: 'row',
    gap: AppTheme.spacing.sm,
  },
  actionButton: {
    backgroundColor: AppTheme.colors.backgroundAlt,
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionLabel: {
    color: AppTheme.colors.text,
    fontSize: 14,
    fontWeight: '600',
  },
  noteCard: {
    backgroundColor: AppTheme.colors.cardMuted,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: AppTheme.colors.border,
    padding: AppTheme.spacing.lg,
    marginTop: AppTheme.spacing.sm,
  },
  noteTitle: {
    color: AppTheme.colors.text,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  noteBody: {
    color: AppTheme.colors.textMuted,
    fontSize: 14,
    lineHeight: 21,
  },
});
