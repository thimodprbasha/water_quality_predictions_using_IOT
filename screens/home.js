import React from 'react';
import { StyleSheet, Text, View ,Button,Alert} from 'react-native';

export default function Home({navigation}) {

const pressHandler =() =>{
 
    navigation.navigate('Login');
}
  return (
    <View style={styles.container}>
  
      <Button title = 'JalaRead 1.0' onPress={pressHandler}/>
     
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
});