import {createStackNavigator, createAppContainer,createDrawerNavigator} from 'react-navigation';
import React, { Component } from 'react';
import {button,View,Text,} from 'react-native'
import Main from './pages/main'
import cofres from './pages/cofre'
import pag from './pages/pagamentos'
import pert from './pages/pertences'
import Icon from 'react-native-vector-icons/Ionicons'


const route= createStackNavigator({

    Main,
    cofres,
    
}, {
  
  defaultNavigationOptions:({ navigation }) =>{
    return{
    headerStyle:{
        backgroundColor: "#2E66FF"
    },
    headerTintColor:"#FFF",
    headerLeft: (
      <Icon
        style={{ paddingLeft: 10 }}
        onPress={() => navigation.openDrawer() }
        name="md-menu"
        size={30}
      />
      )
    
  }  
}}
);


const route2 = createDrawerNavigator({
    
    "Keep it Safe":route,
    Armarios:cofres,
    Pagamentos:pag,
    Pertences:pert,
},{
  headerStyle:{
    backgroundColor: "#2E66FF"
},
  headerTintColor:"#FFF",
  
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize:18,
    position: 'absolute',
  },
});

const container= createAppContainer(route2);

export default container;