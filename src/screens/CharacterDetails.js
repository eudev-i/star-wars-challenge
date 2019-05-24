/*
    Autor: Vitoria Gonçalves
    Objetivo: Tela Character Details
    Data:30/04/2019
*/

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import axios from "axios";


export default class CharacterDetails extends Component {

  constructor(){
    super();
        this.state = {
          characterDetails:{}
        }
  }

  componentWillMount(){
    this.fetcCharacter(); 
  }

  fetcCharacter(){

  
    return axios.get('https://swapi.co/api/people/1/')
    .then(({data}) => {

      const {name, birth_year, gender} = data;
      const character = {
        name,
        birth_year,
        gender
      }
      this.setState({characterDetails: data})

      return character;
    })
  }

  character = () => {
    this.props.navigation.navigate('Character');
  }

  render() {
    return (
      <View style={styles.container}>  
        <View style={styles.header}>
            <TouchableOpacity onPress={this.character}>
              <Icon name="ios-arrow-round-back" size={35} color={'white'} style={styles.espaco}/>
            </TouchableOpacity>
            <Text style={styles.textHeader}>{this.state.characterDetails.name}</Text>
        </View>
        
        <View style={styles.areaImgCharacter}>
            <Image source={require('../img/luke.jpeg')}
                style={styles.imgCharacter}/>
        </View>
        

        <View style={styles.content}>
            <View style={styles.textEsquerda}>
                <Text style={styles.infoTitle}>Birth Year</Text>
                <Text style={styles.infoText}>{this.state.characterDetails.birth_year}</Text>
                <Text style={styles.infoTitle}>Specy </Text>
                <Text style={styles.infoText}>Human</Text>
            </View>
            <View style={styles.textDireita}>
                <Text style={styles.infoTitle}>Gender</Text>
                <Text style={styles.infoText}>{this.state.characterDetails.gender}</Text>
                <Text style={styles.infoTitle}>Homeworld</Text>
                <Text style={styles.infoText}>Tatooine</Text>
            </View>
        </View>

        <View style={styles.contentTitleFilms}>
            <View style={styles.titleContent}>
            <Icon name="ios-videocam" size={30} color={'#ffe81f'}/>
                <Text style={styles.textTitleFimls}>Films</Text>
            </View>

            <View style={styles.nameFimls}>
                <Text style={styles.textNameFimls}>{this.state.characterDetails.films}</Text>
            </View>
            <View style={styles.nameFimls}>
                <Text style={styles.textNameFimls}>The Empire Strikes Back</Text>
            </View>
            <View style={styles.nameFimls}>
                <Text style={styles.textNameFimls}>The Empire Strikes Back</Text>
            </View>
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
    alignItems:'center',
    flexDirection:'row',
    paddingTop:20,
    paddingLeft:20
  },
  imgArrow:{
    width:20,
    height:20,
    marginRight:50
  },  
  textHeader:{
      color:'#ffe81f',
      fontSize:23,
      fontFamily:'Exo Regular'
  },
  content:{
      width:360,
      height:125,
      backgroundColor:'#000',
      padding: 20,
      borderTopWidth: 1,
      flexDirection:'row',
      borderTopColor:'#ffe81f',
  },
  titleContent:{
      color:'#fff',
      fontSize:20,
  },
  areaImgCharacter:{
    borderBottomColor: '#ffe81f',
    borderBottomWidth: 1,
    marginBottom:5,
  },
  imgCharacter:{
    width:360,
    height:200,
  },
  textEsquerda:{
    width:150,
    height:105,
  },
  textDireita:{
    width:150,
    height:105,
    marginLeft:15,
  },
  infoTitle:{
    color:'#fff'
  },
  infoText:{
    color:'#fff',
    fontWeight:'bold',
    marginBottom:10
  },
  contentTitleFilms:{
    width:320,
    height:200,
  },
  titleContent:{
      flexDirection:'row',
      width:150,
      height:35,
  },
  imgNav:{
    width:25,
    height:25,
  },
  textTitleFimls:{
    color:'#ffe81f',
    marginLeft:10,
    fontSize:20,    
    fontFamily:'Exo Regular'      
  },
  nameFimls:{
      width:320,
      height:30,
      borderBottomColor: '#fff',
      borderBottomWidth: 1,
      marginBottom:10
  },
  textNameFimls:{
      color:'#fff',
      fontFamily:'Exo Regular'
  },
  espaco:{
    marginRight:35,
  }
});
