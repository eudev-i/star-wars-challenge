/*
    Autor: Vitoria Gonçalves
    Objetivo: Tela Character
    Data:30/04/2019
*/

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TouchableOpacity, FlatList} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import axios from "axios";
import { imgCharacter } from "../aux";


export default class Character extends Component {

  constructor(){
    super();
      this.state = {
        character:[]
      }
  }

  componentWillMount(){
    axios.get('https://swapi.co/api/people')
    .then((res =>{
      this.setState({character: res.data.results})
    }))
  }

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
            <Text style={styles.textHeader}>STAR WARS</Text>
        </View>

        <View style={styles.content}>
            <Text style={styles.titleContent}>Personagens</Text>

            <FlatList data={this.state.character}
                      keyExtractor={item=>item.id}
                      numColumns={2}
                      renderItem={({item}) => (
            
                <View style={styles.characterItems}>
                  <TouchableOpacity onPress={this.characterDetails}>
                    <Image source = {imgCharacter(item.name)}
                        style={styles.imgCharacterItems} />
                  </TouchableOpacity>
                  <Text style={styles.titleCharacter}>{item.name}</Text>
                </View>

              )}
            />

        </View>

        <View style={styles.nav}>

          
          <View style={styles.navItems}>
            <Icon name = "ios-person"  size={20} color={'#ffe81f'}/>
            <Text style={{color:'#ffe81f', fontFamily:'Exo Regular'}}>Character</Text>
          </View>
          

          <TouchableOpacity onPress={this.films}>
            <View style={styles.navItems}>
              <Icon name="ios-videocam" size={20} color={'#e5e5e5'}/>
              <Text style={{color:'#e5e5e5', fontFamily:'Exo Regular'}}>Movies</Text>
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
      fontSize:23,
      paddingTop:35,
      fontFamily: 'Exo Regular'
  },
  content:{
      width:360,
      height:545,
      backgroundColor:'#000',
      padding: 20
  },
  titleContent:{
      color:'#fff',
      fontSize:28,
      fontFamily:'Exo Regular'
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
      backgroundColor:'#000',
      marginTop:20
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
    textAlign:'center',
    fontFamily:'Exo Regular'
  },
  nav:{
    width:360,
    height:60,
    flexDirection: 'row',
    borderTopColor: '#ffe81f',
    borderTopWidth: 0.34,
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
