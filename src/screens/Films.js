/*
    Autor: Vitoria Gonçalves
    Objetivo: Tela Films
    Data:30/04/2019
*/

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TouchableOpacity, FlatList} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import axios from "axios";

export default class Films extends Component {

  constructor(){
    super();
        this.state = {
          peoples:[]
        }
  }

  componentWillMount(){
    axios.get('https://swapi.co/api/films')
    .then((res =>{
      this.setState({peoples: res.data.results})
    }))  
  }

  filmsDetails = (item) => {
    this.props.navigation.navigate('FilmsDetails');
  }

  character = () => {
    this.props.navigation.navigate('Character');
  }

  render() {
    return (
      <View style={styles.container}>  
        <View style={styles.header}>
            <Text style={styles.textHeader}>STAR WARS</Text>
        </View>

        <View style={styles.content}>
            <Text style={styles.titleContent}>Filmes</Text>

            <FlatList data={this.state.peoples}
                      keyExtractor={item=>item.id}
                      numColumns={2}
                      renderItem={({item})=> (

                        <View style={styles.filmsItems}>
                           <TouchableOpacity onPress={() => this.filmsDetails(item)}>
                             <Image source={require('../img/testeFilme.jpeg')}
                             style={styles.imgFilmsItems}/>
                           </TouchableOpacity>
                           <Text style={styles.titleFilms}>{item.title}</Text>
                          </View>
                      )}
                      
            />          

        </View>

        <View style={styles.nav}>

          <TouchableOpacity onPress={this.character}>
            <View style={styles.navItems}>
              <Icon name = "ios-person"  size={20} color={'#e5e5e5'}/>
              <Text style={{color:'#e5e5e5', fontFamily:'Exo Regular'}}>Character</Text>
            </View>
          </TouchableOpacity>

          
          <View style={styles.navItems}>
            <Icon name="ios-videocam" size={20} color={'#ffe81f'}/>
            <Text style={{color:'#ffe81f', fontFamily:'Exo Regular'}}>Movies</Text>
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
    alignItems:'center'
  },
  textHeader:{
      color:'#ffe81f',
      fontSize:23,
      paddingTop:35,
      fontFamily:'Exo Regular'
  },
  content:{
      width:360,
      height:545,
      backgroundColor:'#000',
      padding: 20,
  },
  titleContent:{
      color:'#fff',
      fontSize:28,
      fontFamily:'Exo Regular'
  },
  films:{
    width:320,
    height:490,
    marginTop:10,
    backgroundColor:'pink',
    flexDirection: 'row'
  },
  filmsItems:{
      width:150,
      height:290,
      marginRight:20,
      borderRadius:6,
      backgroundColor:'#fff',
      marginTop:20,
  },
  imgFilmsItems:{
    width:150,
    height:240
  },
  titleFilms:{
    color:'#000',
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
  }
});
