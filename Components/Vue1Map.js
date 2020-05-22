//défini l'affichage de la carte sur la première vue

import  React from 'react';
import {  View, Text, StyleSheet, Dimensions} from 'react-native';
import MapView from 'react-native-maps';                  //librairie à importer pour afficher la carte


class Vue1Map extends React.Component {

    render() {                                     
        return (
          <View style={styles.container}>
            <MapView                                     //affichage de la carte
              style={styles.mapStyle}                    //définition du style d'affichage grâce à mapStyle
              initialRegion={Paris}>                     //zoom sur la région parisienne grâce à la constante Paris défini plus bas
            </MapView>
          </View>
        );
      }

}

const styles = StyleSheet.create({
    container: {
      flex: 3,                                         // la carte occupe 3/4 de l'écran car flex: 1 pour les champs de saisie, 3+1=4 
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mapStyle: {
      flex: 3,
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });
  
  const Paris = {                                       //intervalle de latitude et longitude de Paris où sont disponibles les vélib
    latitude: 48.8590,                 
    longitude: 2.3410,               
    latitudeDelta: 0.08,
    longitudeDelta:0.10,
  };
  

export default Vue1Map


