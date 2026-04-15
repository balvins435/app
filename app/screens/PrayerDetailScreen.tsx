import { Ionicons } from '@expo/vector-icons';
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import {
  Pressable,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  getNextPrayer,
  getPrayerById,
  getPrayerRecord,
  getSeasonLabel,
} from '@/app/data/prayers';
import { usePrayerApp } from '@/app/state/PrayerAppContext';
import { PrayerDetailScreenProps } from '@/app/types/prayer';
import { AppTheme } from '@/constants/app-theme';

export default function PrayerDetailScreen({ navigation, route }: PrayerDetailScreenProps) {
  const prayer = useMemo(
    () =>
      getPrayerById(
        route.params.categoryId,
        route.params.subcategoryId,
        route.params.prayerId,
      ),
    [route.params.categoryId, route.params.prayerId, route.params.subcategoryId],
  );
  const prayerRecord = useMemo(() => getPrayerRecord(route.params), [route.params]);
  const nextPrayer = useMemo(() => getNextPrayer(route.params), [route.params]);
  const scrollRef = useRef<ScrollView>(null);
  const scrollOffsetRef = useRef(0);
  const contentHeightRef = useRef(0);
  const layoutHeightRef = useRef(0);
  const [teleprompterOn, setTeleprompterOn] = useState(false);
  const {
    fontScale,
    isFavorite,
    markPrayerViewed,
    readingMode,
    setFontScale,
    teleprompterSpeed,
    toggleFavorite,
    toggleReadingMode,
  } = usePrayerApp();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: prayer?.title ?? 'Prayer',
    });
  }, [navigation, prayer?.title]);

  useEffect(() => {
    if (prayer?.id) {
      markPrayerViewed(prayer.id);
    }
  }, [markPrayerViewed, prayer?.id]);

  useEffect(() => {
    if (!teleprompterOn || !prayer?.reading.allowTeleprompter) {
      return undefined;
    }

    const interval = setInterval(() => {
      const maxOffset = Math.max(0, contentHeightRef.current - layoutHeightRef.current);
      const nextOffset = scrollOffsetRef.current + 1.4 * teleprompterSpeed;

      if (nextOffset >= maxOffset) {
        setTeleprompterOn(false);
        return;
      }

      scrollRef.current?.scrollTo({ animated: false, y: nextOffset });
      scrollOffsetRef.current = nextOffset;
    }, 50);

    return () => clearInterval(interval);
  }, [prayer?.reading.allowTeleprompter, teleprompterOn, teleprompterSpeed]);

  const effectiveFontScale = useMemo(() => {
    if (!prayer) {
      return 1;
    }

    return Math.max(
      prayer.reading.minFontScale,
      Math.min(fontScale, prayer.reading.maxFontScale),
    );
  }, [fontScale, prayer]);

  const bodyFontSize = 16 * effectiveFontScale;
  const favorite = prayer ? isFavorite(prayer.id) : false;

  return (
    <SafeAreaView edges={['bottom']} style={styles.safeArea}>
      <ScrollView
        ref={scrollRef}
        contentContainerStyle={styles.content}
        onContentSizeChange={(_, height) => {
          contentHeightRef.current = height;
        }}
        onLayout={(event) => {
          layoutHeightRef.current = event.nativeEvent.layout.height;
        }}
        onScroll={(event) => {
          scrollOffsetRef.current = event.nativeEvent.contentOffset.y;
        }}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}>
        <View style={[styles.heroCard, readingMode === 'focused' && styles.heroCardFocused]}>
          <View style={styles.badgeRow}>
            <Text style={styles.badge}>{prayerRecord ? prayerRecord.subcategory.title : 'Prayer'}</Text>
            <Text style={styles.badge}>{prayer ? getSeasonLabel(prayer.season) : 'Season'}</Text>
          </View>
          <Text style={styles.title}>{prayer?.title ?? 'Prayer not found'}</Text>
          <Text style={styles.subtitle}>
            {prayer?.subtitle ?? 'This prayer is not available offline yet.'}
          </Text>
        </View>

        <View style={styles.toolbar}>
          <ToolButton
            active={favorite}
            icon={favorite ? 'heart' : 'heart-outline'}
            label={favorite ? 'Saved' : 'Save'}
            onPress={handleToggleFavorite}
          />
          <ToolButton icon="share-social-outline" label="Share" onPress={handleShare} />
          <ToolButton icon="remove-outline" label="A-" onPress={handleDecreaseFont} />
          <ToolButton icon="add-outline" label="A+" onPress={handleIncreaseFont} />
          <ToolButton
            active={readingMode === 'focused'}
            icon="book-outline"
            label="Mode"
            onPress={toggleReadingMode}
          />
          <ToolButton
            active={teleprompterOn}
            disabled={!prayer?.reading.allowTeleprompter}
            icon={teleprompterOn ? 'pause-outline' : 'play-outline'}
            label="Teleprompter"
            onPress={toggleTeleprompter}
          />
        </View>

        <View style={styles.speedRow}>
          <Text style={styles.speedText}>Teleprompter {teleprompterSpeed.toFixed(1)}x</Text>
        </View>

        <View style={[styles.bodyWrap, readingMode === 'focused' && styles.bodyWrapFocused]}>
          <Text style={[styles.body, { fontSize: bodyFontSize, lineHeight: bodyFontSize * 1.75 }]}>
            {prayer?.content ?? 'This prayer is not available offline yet.'}
          </Text>
        </View>

        {nextPrayer ? (
          <Pressable
            accessibilityRole="button"
            onPress={handleNextPrayer}
            style={styles.nextButton}>
            <Text style={styles.nextLabel}>Next prayer</Text>
            <Text style={styles.nextTitle}>{nextPrayer.prayer.title}</Text>
          </Pressable>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );

  function handleToggleFavorite() {
    if (!prayer) {
      return;
    }

    toggleFavorite(prayer.id);
  }

  async function handleShare() {
    if (!prayer) {
      return;
    }

    await Share.share({
      message: `${prayer.title}\n\n${prayer.content}`,
      title: prayer.title,
    });
  }

  function handleIncreaseFont() {
    if (!prayer) {
      return;
    }

    setFontScale(Math.min(prayer.reading.maxFontScale, fontScale + 0.1));
  }

  function handleDecreaseFont() {
    if (!prayer) {
      return;
    }

    setFontScale(Math.max(prayer.reading.minFontScale, fontScale - 0.1));
  }

  function toggleTeleprompter() {
    if (!prayer?.reading.allowTeleprompter) {
      return;
    }

    setTeleprompterOn((current) => !current);
  }

  function handleNextPrayer() {
    if (!nextPrayer) {
      return;
    }

    navigation.replace('PrayerDetail', nextPrayer.route);
  }
}

type ToolButtonProps = {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  onPress: () => void;
  active?: boolean;
  disabled?: boolean;
};

function ToolButton({ icon, label, onPress, active = false, disabled = false }: ToolButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled}
      onPress={onPress}
      style={[styles.toolButton, active && styles.toolButtonActive, disabled && styles.toolButtonDisabled]}>
      <Ionicons
        color={active ? '#101010' : AppTheme.colors.text}
        name={icon}
        size={18}
      />
      <Text style={[styles.toolLabel, active && styles.toolLabelActive]}>{label}</Text>
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
    paddingBottom: AppTheme.spacing.xxl,
  },
  heroCard: {
    backgroundColor: AppTheme.colors.card,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: AppTheme.colors.border,
    padding: AppTheme.spacing.lg,
    marginBottom: AppTheme.spacing.md,
  },
  heroCardFocused: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    paddingHorizontal: 0,
  },
  badgeRow: {
    flexDirection: 'row',
    gap: AppTheme.spacing.sm,
    marginBottom: AppTheme.spacing.md,
  },
  badge: {
    color: AppTheme.colors.accentStrong,
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  title: {
    color: AppTheme.colors.text,
    fontSize: 30,
    lineHeight: 36,
    fontFamily: AppTheme.fonts.heading,
    marginBottom: 8,
  },
  subtitle: {
    color: AppTheme.colors.textMuted,
    fontSize: 15,
    lineHeight: 22,
  },
  toolbar: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: AppTheme.spacing.sm,
    marginBottom: AppTheme.spacing.sm,
  },
  toolButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: AppTheme.radius.pill,
    backgroundColor: AppTheme.colors.card,
    borderWidth: 1,
    borderColor: AppTheme.colors.border,
  },
  toolButtonActive: {
    backgroundColor: AppTheme.colors.accentStrong,
    borderColor: AppTheme.colors.accentStrong,
  },
  toolButtonDisabled: {
    opacity: 0.45,
  },
  toolLabel: {
    color: AppTheme.colors.text,
    fontSize: 13,
    fontWeight: '600',
  },
  toolLabelActive: {
    color: '#101010',
  },
  speedRow: {
    marginBottom: AppTheme.spacing.md,
  },
  speedText: {
    color: AppTheme.colors.textSoft,
    fontSize: 13,
  },
  bodyWrap: {
    backgroundColor: AppTheme.colors.card,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: AppTheme.colors.border,
    padding: AppTheme.spacing.lg,
  },
  bodyWrapFocused: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    paddingHorizontal: 0,
  },
  body: {
    color: '#E0E0E0',
  },
  nextButton: {
    backgroundColor: AppTheme.colors.cardMuted,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: AppTheme.colors.border,
    padding: AppTheme.spacing.lg,
    marginTop: AppTheme.spacing.lg,
  },
  nextLabel: {
    color: AppTheme.colors.accentStrong,
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: 6,
  },
  nextTitle: {
    color: AppTheme.colors.text,
    fontSize: 18,
    fontWeight: '700',
  },
});
