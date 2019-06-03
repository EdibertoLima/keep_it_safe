import {createStackNavigator} from 'react-navigation';

import Main from './pages/main'

export default createStackNavigator({
    Main

}, {
  navigationOptions:{
    headerStyle:{
        backgroundColor: "#2E66FF"
    },
    headerTintColor: "#FFF"
  },  
});