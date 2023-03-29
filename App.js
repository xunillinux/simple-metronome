import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Metronome from './src/Metronome';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-500">
      <StatusBar style="auto" />

      <Metronome />
    </View>
  );
}
