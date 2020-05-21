import  React from 'react';
import {  View, Text, StyleSheet, Dimensions} from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';


const coordinates =[
    { latitude: 48.831583,            //Maison
      longitude: 2.273262,
    },
    { latitude: 48.852508,            //Velib LaFontaine
      longitude: 2.265014,
    },
    { latitude: 48.860229,            
        longitude: 2.296055,           
    },
    { latitude: 48.857984,
        longitude:  2.301076,
    },
  
  ];

const GOOGLE_MAPS_APIKEY = "AIzaSyAxewzYWS1lrKHda6hrLje0r3VeDHC3Kgs"

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
                    <MapViewDirections
                        origin= {coordinates[0]}
                        destination={coordinates[1]}
                        apikey= {GOOGLE_MAPS_APIKEY}
                        strokeWidth= {3}
                        strokeColor= "hotpink"
                    />
                    <MapViewDirections
                        origin= {coordinates[1]}
                        destination={coordinates[2]}
                        apikey= {GOOGLE_MAPS_APIKEY}
                        strokeWidth= {3}
                        strokeColor= "blue"
                    />
                    <MapViewDirections
                        origin= {coordinates[2]}
                        destination={coordinates[3]}
                        apikey= {GOOGLE_MAPS_APIKEY}
                        strokeWidth= {3}
                        strokeColor= "hotpink"
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


