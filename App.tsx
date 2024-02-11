import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ReactNativeTechsLogos from './components/ReactNativeTechsLogos'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>react-native-techs-logos</Text>
      <ReactNativeTechsLogos />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f00',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
