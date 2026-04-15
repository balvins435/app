import AppNavigator from './app/navigation/AppNavigator';
import { PrayerAppProvider } from '@/app/state/PrayerAppContext';

export default function App() {
  return (
    <PrayerAppProvider>
      <AppNavigator />
    </PrayerAppProvider>
  );
}
