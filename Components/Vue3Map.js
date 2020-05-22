//3ème vue pour l'affichage de l'itinéraire

import  React from 'react';
import {  View, Text, StyleSheet, Dimensions} from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';   //nouvelle librairie pour obtenir l'itinéraire entre 2 points de coordonnées de GPS connus


const coordinates =[
  { latitude: 48.869978,            //Rue de la Paix
    longitude: 2.332094,
  },
  { latitude: 48.867367,            //station vélib à proximité rue de la paix
    longitude: 2.340625,
  },
  { latitude: 48.852795,            // avenue mozart
      longitude:2.268382 ,           
  },
  { latitude: 48.854351,            // station velib mozart
      longitude:  2.269177,
  },

];

const GOOGLE_MAPS_APIKEY = "AIzaSyAxewzYWS1lrKHda6hrLje0r3VeDHC3Kgs"            //utilisation d'une API google pour l'ititnéraire

class Vue3Map extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <MapView 
                    style={styles.mapStyle}
                    initialRegion={Paris}>
                    <MapView.Marker coordinate={coordinates[0] }/>
                    <MapView.Marker coordinate={coordinates[1] /*pinColor={pinColorVelib}*/ }/>
                    <MapView.Marker coordinate={coordinates[2] /*pinColor={pinColorVelib}*/ }/>
                    <MapView.Marker coordinate={coordinates[3]}/>
                    <MapViewDirections                         //construction de l'itinéraire point de départ --> 1ère station de vélib
                        origin= {coordinates[0]}
                        destination={coordinates[1]}
                        apikey= {GOOGLE_MAPS_APIKEY}
                        strokeWidth= {3}
                        strokeColor= "hotpink"                //couleur d'affichage de l'itinéraire (à pied)
                    />
                    <MapViewDirections                        //construction itinéraire 1ère station --> 2ème station
                        origin= {coordinates[1]}
                        destination={coordinates[2]}
                        apikey= {GOOGLE_MAPS_APIKEY}
                        strokeWidth= {3}
                        strokeColor= "blue"                   //couleur d'affichage de l'itinéraire en Vélib
                    />
                    <MapViewDirections                        //construction itinéraire 2ème station --> destination
                        origin= {coordinates[2]}
                        destination={coordinates[3]}
                        apikey= {GOOGLE_MAPS_APIKEY}
                        strokeWidth= {3}
                        strokeColor= "hotpink"                //couleur d'affichage de l'itinéraire à pied
                    />
                </MapView>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
      flex: 3,
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
  
  const Paris = {
    latitude: 48.8590,                 
    longitude: 2.3410,               
    latitudeDelta: 0.08,
    longitudeDelta:0.10,
  };
  
  //const pinColorVelib = {'#000'};

  //const pinColorDepartArrivee = {'red'};

export default Vue3Map


