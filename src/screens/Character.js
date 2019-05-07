/*
    Autor: Vitoria Gonçalves
    Objetivo: Tela Character
    Data:30/04/2019
*/

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";


export default class Character extends Component {

  films = () => {
    this.props.navigation.navigate('Films');
  }

  characterDetails = () => {
    this.props.navigation.navigate('CharacterDetails');
  }
  

  render() {
    return (
      <View style={styles.container}>  
        <View style={styles.header}>
            <Text style={styles.textHeader}>Star Wars</Text>
        </View>

        <View style={styles.content}>
            <Text style={styles.titleContent}>Personagens</Text>

            <View style={styles.character}>
                <View style={styles.characterItems}>
                  <TouchableOpacity onPress={this.characterDetails}>
                    <Image source={require('../img/fotoPersonagem.jpeg')}
                    style={styles.imgCharacterItems}/>
                  </TouchableOpacity>
                  <Text style={styles.titleCharacter}>Luke skywalker</Text>
                </View>

                <View style={styles.filmsItems}>
                  <Image source={require('../img/fotoPersonagem.jpeg')}
                  style={styles.imgCharacterItems}/>
                  <Text style={styles.titleCharacter}>Luke skywalker</Text>
                </View>
            </View>

        </View>

        <View style={styles.nav}>

          
          <View style={styles.navItems}>
            <Icon name = "ios-person"  size={20} color={'#ffe81f'}/>
            <Text style={styles.textNav}>Character</Text>
          </View>
          

          <TouchableOpacity onPress={this.films}>
            <View style={styles.navItems}>
              <Icon name="ios-videocam" size={20} color={'#ffe81f'}/>
              <Text style={styles.textNav}>Movies</Text>
            </View>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000',
  },
  header: {
    width:360,
    height:80,
    borderBottomColor: '#ffe81f',
    borderBottomWidth: 0.34,
    alignItems:'center'
  },
  textHeader:{
      color:'#ffe81f',
      fontSize:20,
      paddingTop:35
  },
  content:{
      width:360,
      height:545,
      backgroundColor:'#000',
      padding: 20
  },
  titleContent:{
      color:'#fff',
      fontSize:20,
  },
  character:{
    width:320,
    height:490,
    marginTop:10,
    flexDirection: 'row'
  },
  characterItems:{
      width:150,
      height:200,
      marginRight:20,
      borderRadius:6,
      
      backgroundColor:'#000'
  },
  imgCharacterItems:{
    width:150,
    height:150,
    borderRadius: 100,
  },
  titleCharacter:{
    color:'#fff',
    padding:5,
    fontSize:15,
    textAlign:'center'
  },
  nav:{
    width:360,
    height:60,
    flexDirection: 'row'
  },
  navItems:{
    width:180,
    height:56,
    alignItems:'center',
    padding:15
  },
  imgNav:{
    width:10,
    height:10,
  },
  textNav:{
    color:'#ffe81f',
  }
});
