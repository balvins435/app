import { PropsWithChildren, createContext, useCallback, useContext, useMemo, useState } from 'react';

import { getDefaultFavoriteIds } from '@/app/data/prayers';

type ReadingMode = 'standard' | 'focused';

type PrayerAppContextValue = {
  favoriteIds: string[];
  prayerCounter: number;
  streakCount: number;
  fontScale: number;
  teleprompterSpeed: number;
  readingMode: ReadingMode;
  isFavorite: (prayerId: string) => boolean;
  toggleFavorite: (prayerId: string) => void;
  markPrayerViewed: (prayerId: string) => void;
  setFontScale: (fontScale: number) => void;
  setTeleprompterSpeed: (speed: number) => void;
  toggleReadingMode: () => void;
};

const PrayerAppContext = createContext<PrayerAppContextValue | undefined>(undefined);

export function PrayerAppProvider({ children }: PropsWithChildren) {
  const [favoriteIds, setFavoriteIds] = useState<string[]>(getDefaultFavoriteIds);
  const [prayerCounter, setPrayerCounter] = useState(18);
  const [streakCount, setStreakCount] = useState(6);
  const [fontScale, setFontScaleState] = useState(1);
  const [teleprompterSpeed, setTeleprompterSpeedState] = useState(1);
  const [readingMode, setReadingMode] = useState<ReadingMode>('standard');

  const isFavorite = useCallback(
    (prayerId: string) => favoriteIds.includes(prayerId),
    [favoriteIds],
  );

  const toggleFavorite = useCallback((prayerId: string) => {
    setFavoriteIds((currentFavorites) =>
      currentFavorites.includes(prayerId)
        ? currentFavorites.filter((id) => id !== prayerId)
        : [prayerId, ...currentFavorites],
    );
  }, []);

  const markPrayerViewed = useCallback((_prayerId: string) => {
    setPrayerCounter((count) => {
      const nextCount = count + 1;

      if (nextCount % 4 === 0) {
        setStreakCount((currentStreak) => currentStreak + 1);
      }

      return nextCount;
    });
  }, []);

  const setFontScale = useCallback((nextScale: number) => {
    setFontScaleState(Math.max(0.9, Math.min(nextScale, 1.6)));
  }, []);

  const setTeleprompterSpeed = useCallback((nextSpeed: number) => {
    setTeleprompterSpeedState(Math.max(0.5, Math.min(nextSpeed, 2.5)));
  }, []);

  const toggleReadingMode = useCallback(() => {
    setReadingMode((currentMode) => (currentMode === 'standard' ? 'focused' : 'standard'));
  }, []);

  const value = useMemo<PrayerAppContextValue>(
    () => ({
      favoriteIds,
      prayerCounter,
      streakCount,
      fontScale,
      teleprompterSpeed,
      readingMode,
      isFavorite,
      toggleFavorite,
      markPrayerViewed,
      setFontScale,
      setTeleprompterSpeed,
      toggleReadingMode,
    }),
    [
      favoriteIds,
      fontScale,
      isFavorite,
      markPrayerViewed,
      prayerCounter,
      readingMode,
      setFontScale,
      setTeleprompterSpeed,
      streakCount,
      teleprompterSpeed,
      toggleFavorite,
      toggleReadingMode,
    ],
  );

  return <PrayerAppContext.Provider value={value}>{children}</PrayerAppContext.Provider>;
}

export function usePrayerApp() {
  const context = useContext(PrayerAppContext);

  if (!context) {
    throw new Error('usePrayerApp must be used inside PrayerAppProvider');
  }

  return context;
}
