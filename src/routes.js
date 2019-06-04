import {createStackNavigator, createAppContainer,createDrawerNavigator} from 'react-navigation';
import React, { Component } from 'react';
import {button,View,Text,} from 'react-native'
import Main from './pages/main'
import cofres from './pages/cofre'




const route= createStackNavigator({

    Main,
    cofres,
    
}, {
  defaultNavigationOptions:{
    
    headerStyle:{
        backgroundColor: "#2E66FF"
    },
    headerTintColor: "#FFF"
  },  
});

const route2 = createDrawerNavigator({
  
    'Keep it Safe':route,
    Mapa:Main,
    Armarios:cofres,
  
 

});

const container= createAppContainer(route2);

export default container;