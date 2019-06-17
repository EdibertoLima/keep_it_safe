import React from 'react';
import { View, Button, Text } from 'react-native';
import { withNavigation } from 'react-navigation';

const Page3 = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Cartoes</Text>
    <Button title="Back" onPress={() => { }} />

  </View>
);

Page3.navigationOptions = {
  title: 'Pagamentos',
}


export default Page3;