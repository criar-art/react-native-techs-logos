import { StatusBar } from 'expo-status-bar';
import { StatusBar as StatusBarReactNative, SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';

import ReactNativeTechsLogos from './components/ReactNativeTechsLogos'

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.logo}>
        <ReactNativeTechsLogos name="react" hiddenLabel size={30} />
        <Text style={styles.title}>
          react-native-techs-logos
        </Text>
      </View>
      <ScrollView>
        <View style={styles.container}>

          <Text style={styles.subTitle}>Single Github</Text>
          <ReactNativeTechsLogos name="github" background='#fff' />

          <Text style={styles.subTitle}>List Array</Text>
          <ReactNativeTechsLogos list={['vue','javascript', 'react', 'angular']} background="#fff" />

          <Text style={styles.subTitle}>List Full</Text>
          <ReactNativeTechsLogos background="#fff" />

          <StatusBar style="light" backgroundColor="#000" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    marginTop: StatusBarReactNative.currentHeight || 0
  },
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    color: '#fff',
    marginLeft: 10
  },
  subTitle: {
    fontSize: 20,
    color: '#000',
    margin: 10,
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
    width: '100%',
    textAlign: 'center'
  },
  logo: {
    height: 50,
    padding: 10,
    backgroundColor: '#222',
    flexWrap: 'wrap',
    flexDirection: 'row',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 17
  },
});
