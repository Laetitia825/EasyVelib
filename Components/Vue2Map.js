import  React from 'react';
import {  View, Text, StyleSheet, Dimensions} from 'react-native';
import MapView from 'react-native-maps';



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



class Vue2Map extends React.Component {

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

export default Vue2Map


