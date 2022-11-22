import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { CustomButton,GameResult } from 'morra_components';


export default function App() {
  const prova = () => {
    console.log('va');
    const risultato = GameResult(1,2)
    console.log(risultato[0]);
  }
  return (
    <View style={styles.container}>
      <Text>vai o no</Text>
      <CustomButton onClickCallback={prova}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    backgroundColor:'red',
    padding:10
  }
});


