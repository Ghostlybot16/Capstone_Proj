import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const placeholderImage = require('./assets/images/background-image.png');

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={placeholderImage} s></Image>
      <Text style={{color:"#fff", fontSize:"19px"}}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
