//permet de définir l'affichage des champs de saisie de départ et d'arrivée

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
  
  
  
  render() {            // rendu affichage des champs de saisie de départ et d'arrivée
    return (
      <View style={styles.main_container}>                      //affichage selon la définition du main_container 
        <TextInput 
          style={styles.textinput}                              // style du champs de saisie fixé
          placeholder='Départ!'                                 // champs de saisie adresse de départ 
          onChangeText={(text) => this._adresseDepartInputChanged(text)}       
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

const styles = StyleSheet.create({             //défini le style d'affichage des rectangles sur l'écran
  main_container: {
    flex: 1,
    marginTop: 20
  },
  textinput: {                                // défini le style des rectangles
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    width: 200,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }
})

export default Vue1DepartArrivee



