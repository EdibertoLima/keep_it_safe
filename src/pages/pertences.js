import React from 'react';
import { View, Button, Text } from 'react-native';
import {ADD} from '../data';


const Page4 = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Cartoes</Text>
  </View>
  
);

ADD();


Page4.navigationOptions = {
  title: 'Pertences',

}


export default Page4;