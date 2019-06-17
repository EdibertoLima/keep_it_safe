import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Dimensions,Button } from 'react-native';

import MapView,{ AnimatedRegion, Marker } from 'react-native-maps';

export default class App extends Component {
  static navigationOptions = {
    title: 'Keep it safe',
  };
  state = {
    places: [
      {
        id: 1,
        title: 'Igrja de fátima',
        description: 'igreja...',
        latitude: -3.752056,
        longitude: -38.526228,
      },
      {
        id: 2,
        title: 'pitombeira',
        description: '...',
        latitude: -3.742252,
        longitude: -38.534844,
      },
      {
        id: 3,
        title: 'shoping benbica',
        description: 'o melhor da cidade',
        latitude: -3.739041,
        longitude: -38.540129,
      }
    ]
  };

  _mapReady = () => {
    this.state.places[0].mark.showCallout();
  };

  render() {
    const { latitude, longitude } = this.state.places[0];

    return (
      <View style={styles.container}>
        <MapView
          ref={map => this.mapView = map}
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: 0.0142,
            longitudeDelta: 0.0131,
          }}
          style={styles.mapView}
          rotateEnabled={false}
          scrollEnabled={false}
          zoomEnabled={false}
          showsPointsOfInterest={false}
          showBuildings={false}
          onMapReady={this._mapReady}
        >
          { this.state.places.map(place => (
            <MapView.Marker

              ref={mark => place.mark = mark}
              title={place.title}
              description={place.description}
              key={place.id}
              coordinate={{
                latitude: place.latitude,
                longitude: place.longitude,
              }}
             image={require('./safe-box.png')}
            />
          ))}
        </MapView>
        <ScrollView
          style={styles.placesContainer}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={(e) => {
            const place = (e.nativeEvent.contentOffset.x > 0)
              ? e.nativeEvent.contentOffset.x / Dimensions.get('window').width
              : 0;

            const { latitude, longitude, mark } = this.state.places[place];

            this.mapView.animateToCoordinate({
              latitude,
              longitude
            }, 500);

            setTimeout(() => {
              mark.showCallout();
            }, 300)
          }}
        >
          { this.state.places.map(place => (
            <View key={place.id} style={styles.place}>
              <Text style={styles.title}>{ place.title }</Text>
              <Text style={styles.description}>{ place.description }</Text>
              <Button title="Abrir cofre"onPress={() => {this.props.navigation.navigate("cofres") }} />
            </View>
          )) }
        </ScrollView>
      </View>
    );
   
  }
  
}

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },

  mapView: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },

  placesContainer: {
    width: '100%',
    maxHeight: 200,
  },

  place: {
    width: width - 40,
    maxHeight: 150,
    backgroundColor: 'rgba(184, 188, 204, 0.5)',
    marginHorizontal: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 18,
    backgroundColor: 'transparent',
  },

  description: {
    color: '#999',
    fontSize: 12,
    marginTop: 5,
  },
  
});