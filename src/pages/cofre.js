import React from 'react';
import { View, Button, Text } from 'react-native';

const Page2 = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Selecione o cofre desejado</Text>
  </View>
);

Page2.navigationOptions = {
  title: 'Cofre',
}


export default Page2;