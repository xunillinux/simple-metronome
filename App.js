import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-500">
      <StatusBar style="auto" />

      <Text className="text-black text-xl font-bold">Simple Metronome</Text>
      <Text>Test</Text>
    </View>
  );
}
