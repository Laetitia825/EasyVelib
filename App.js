import  React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Vue1Map from "./Components/Vue1Map";
import Vue2Map from "./Components/Vue2Map";
import Vue3Map from "./Components/Vue3Map";
import Vue1DepartArrivee from "./Components/Vue1DepartArrivee";

function Vue1({ navigation }) {
  return (
    <View style={styles.container}>
      <Vue1Map/>
      <Vue1DepartArrivee/>
      <Button
        title="Rechercher"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}



function Vue2({navigation}) {
  return (
    <View style={styles.container}>
      <Vue2Map/>
      <Button
        title="Chercher l'itinéraire"
        onPress={() => navigation.navigate('Page3')}
      />
    </View>
  );
}

function Vue3() {
  return (
    <View style={styles.container}>
      <Vue3Map/>
    </View>
  );
}

const Stack = createStackNavigator();




function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Vue1} />          
        <Stack.Screen name="Details" component={Vue2} />
        <Stack.Screen name="Page3" component={Vue3} />
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

