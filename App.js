import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import MapView from 'react-native-maps';




export default class App extends Component {
  render() {
    return (
      <MapView
      initialRegion={{
        latitude: -3.743873,
        longitude: -38.535846,
        latitudeDelta:0.0042,
        longitudeDelta:0.0031,
      }}
      style={styles.mapView}
      />
    );
  }
}

const styles = StyleSheet.create({
  
  mapView: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
},
});
