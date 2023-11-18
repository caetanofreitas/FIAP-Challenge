import { StatusBar } from 'expo-status-bar';
import Navigator from './src/navigation';

export default function App() {
  return (
    <>
      <Navigator />
      <StatusBar style="auto" />
    </>
  );
}
