import React from 'react';
import { View, Button, Text,StyleSheet } from 'react-native';
import firebase from 'react-native-firebase';

const Page2 = () => (
  <View style={styles.Armarioscontainer}>
    <Text style={styles.Armariostitle}>Selecione uma gaveta</Text>
    <Button title="gaveta x" onPress={() => { }} />
  
  </View>
);

Page2.navigationOptions = {
  title: 'Armários',
} 



export default Page2 ;

const styles = StyleSheet.create({
  Armarioscontainer:{
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    
  },

  Armariostitle:{
    position: 'absolute',
    fontSize:18,
    fontWeight:'bold',
    color:'#333',
    top: 10

  },

});