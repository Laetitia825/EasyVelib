//équivalent Search

import React from 'react'
import { StyleSheet, View, TextInput, Button, Text } from 'react-native'



class Vue1DepartArrivee extends React.Component {

  constructor(props){
    super(props)
    this.adresseDepart=""   
    this.adresseArrivee=""
  }
  

  _adresseDepartInputChanged(text){            //sorte de fonction, 
    this.adresseDepart = text
  }

  _adresseArriveeInputChanged(text){
    this.adresseArrivee = text
  }

  _geocodage(){}
  
  
  
  render() {
    return (
      <View style={styles.main_container}>
        <TextInput 
          style={styles.textinput} 
          placeholder='Départ!'
          onChangeText={(text) => this._adresseDepartInputChanged(text)}       // pk appel fonction avec this devant ?
        />
        <TextInput 
          style={styles.textinput} 
          placeholder='Arrivée'
          onChangeText={(text) => this._adresseArriveeInputChanged(text)}
        />
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 20
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }
})

export default Vue1DepartArrivee



