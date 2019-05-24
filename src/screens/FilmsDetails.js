/*
    Autor: Vitoria Gonçalves
    Objetivo: Tela Films Details
    Data:30/04/2019
*/

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TouchableOpacity, FlatList} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import axios from "axios";

export default class FilmsDetails extends Component {

  constructor(){
    super();
        this.state = {
          filmsDetails:{}
        }
  }

  componentWillMount(){
    this.fetcFilm(); 
  }

  fetcFilm(){

  
    return axios.get('https://swapi.co/api/films/1/')
    .then(({data}) => {
      console.log('Aqui 22', data);

      const {episode_id, title, director, producer, release_date, opening_crawl} = data;
      const film = {
        id: String(episode_id),
        title,
        director,
        producer,
        release_date,
        opening_crawl
      }
      this.setState({filmsDetails: data})

      return film;
    })
  }

  films = () => {
    this.props.navigation.navigate('Films');
  }

  render() {
    return (
      <View style={styles.container}>  

        <View style={styles.header}>
          <TouchableOpacity onPress={onPress=this.films}>
            <Icon name="ios-arrow-round-back" size={35} color={'white'} style={styles.espaco}/>
          </TouchableOpacity>
          <Text style={styles.textHeader}>{this.state.filmsDetails.title}</Text>
        </View>

        <View style={styles.content}>

          <View style={styles.infoFilms}>
            <Image source={require('../img/sith.jpg')}
                    style={styles.imgFilmsItems}/>

            <View style={styles.infoFilmsDetails}>
              <Text style={styles.infoTitle}>Director</Text>
              <Text style={styles.infoText}>{this.state.filmsDetails.director}</Text>
              <Text style={styles.infoTitle}>Producer</Text>
              <Text style={styles.infoText}>{this.state.filmsDetails.producer}</Text>
              <Text style={styles.infoTitle}>Release Date</Text>
              <Text style={styles.infoText}>{this.state.filmsDetails.release_date}</Text>
            </View>
          </View>

          <View style={styles.filmsDescription}>
            <Text style={styles.infoFilmsDetailText}>{this.state.filmsDetails.opening_crawl}</Text>
          </View>
        </View>
        {/* <FlatList data={this.state.filmsDetails}
                      keyExtractor={item=>item.id}
                      renderItem={({item})=> (
                        
                        <View style={styles.header}>
                          <TouchableOpacity onPress={onPress=this.films}>
                              <Icon name="ios-arrow-round-back" size={35} color={'white'} style={styles.espaco}/>
                          </TouchableOpacity>
                          <Text style={styles.textHeader}>{item.title}</Text>
                        </View>
                      )}
                      
            />           */}

                        

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
    paddingLeft:20,
    backgroundColor:'#000'
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
      height:600,
      backgroundColor:'#000',
      padding: 20
  },
  titleContent:{
      color:'#fff',
      fontSize:20,
  },
  imgFilmsItems:{
    width:150,
    height:240
  },
  infoFilms:{
    width:320,
    height:240,
    flexDirection:'row'
  },
  infoFilmsDetails:{
      width:170,
      height:240,
      paddingLeft:20
  },
  infoTitle:{
      color:'#fff'
  },
  infoText:{
    color:'#fff',
    fontWeight:'bold',
    marginBottom:10
  },
  filmsDescription:{
      width:320,
      height:300,
      paddingTop:20
  },
  infoFilmsDetailText:{
      color:'#fff',
      textAlign:'justify',
      fontFamily:'Exo Regular'
  },
  espaco:{
    marginRight:35,
  }
});
