import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen01 from "./screen/Screen01"
import Screen02 from "./screen/Screen02"
import Screen03 from "./screen/Screen03"
import Screen04 from "./screen/Screen04"

export default function App() {
  return (
    // <Screen01/>
    // <Screen02/>
  //  < Screen03/>
     < Screen04/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
