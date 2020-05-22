//fichier principal à exécuter

import  React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';  //import de librairies pour naviguer entre les écrans
import { createStackNavigator } from '@react-navigation/stack';  
import Vue1Map from "./Components/Vue1Map";                      //importation des 4 components
import Vue2Map from "./Components/Vue2Map";
import Vue3Map from "./Components/Vue3Map";
import Vue1DepartArrivee from "./Components/Vue1DepartArrivee";

function Vue1({ navigation }) {                        //fonction permettant d'afficher la première vue en faisant appel aux 2 premiers components
  return (
    <View style={styles.container}>
      <Vue1Map/>
      <Vue1DepartArrivee/>
      <Button                                         //création d'un bouton Rechercher qui envoie l'utilisateur sur la 2ème vue de l'application
        title="Rechercher"
        onPress={() => navigation.navigate('Vue globale')}
      />
    </View>
  );
}



function Vue2({navigation}) {                        //fonction qui permet d'afficher la 2ème vue en faisant appel au component Vue2Map 
  return (
    <View style={styles.container}>
      <Vue2Map/>
      <Button                                        //création d'un bouton de recherche qui redirige l'utilisateur vers la 3ème vue de l'application
        title="Chercher l'itinéraire"
        onPress={() => navigation.navigate('Itinéraire')}
      />
    </View>
  );
}

function Vue3() {                                     //fonction qui permet d'afficher la dernière vue en utilisant le component Vue3Map
  return (
    <View style={styles.container}>
      <Vue3Map/>
    </View>
  );
}

const Stack = createStackNavigator();                //permet de naviguer entre les 3 vues




function App() {                                              //fonction finale permettant de gérer la navigation entre les différentes vues
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Bienvenue">           //la page d'accueil ou vue initiale, puis on nomme les différentes vues
        <Stack.Screen name="Bienvenue" component={Vue1} />          
        <Stack.Screen name="Vue globale" component={Vue2} />
        <Stack.Screen name="Itinéraire" component={Vue3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;








const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});

