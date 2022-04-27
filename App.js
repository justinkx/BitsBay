import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

import Entry from 'navigation/RootNavigation'

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar />
      <Entry />
    </SafeAreaProvider>
  )
}
