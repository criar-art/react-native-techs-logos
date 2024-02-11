import { StatusBar } from 'expo-status-bar';
import { StatusBar as StatusBarReactNative, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import ReactNativeTechsLogos from './components/ReactNativeTechsLogos'

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.title}>react-native-techs-logos</Text>
        <ReactNativeTechsLogos />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: StatusBarReactNative.currentHeight || 0
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    marginTop: 20
  },
});
