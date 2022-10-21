import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Calendario from "./components/Calendario"

export default function App() {

  return (
    <>
      <Calendario></Calendario>
    </>
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
