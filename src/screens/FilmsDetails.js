/*
    Autor: Vitoria Gonçalves
    Objetivo: Tela Films Details
    Data:30/04/2019
*/

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

export default class FilmsDetails extends Component {


  films = () => {
    this.props.navigation.navigate('Films');
  }

  render() {
    return (
      <View style={styles.container}>  
        <View style={styles.header}>
            <TouchableOpacity onPress={this.films}>
                <Icon name="ios-arrow-round-back" size={35} color={'white'} style={styles.espaco}/>
            </TouchableOpacity>
            <Text style={styles.textHeader}>The Pantom Menace</Text>
        </View>

        <View style={styles.content}>

            <View style={styles.infoFilms}>
                <Image source={require('../img/testeFilme.jpeg')}
                    style={styles.imgFilmsItems}/>
                <View style={styles.infoFilmsDetails}>
                    <Text style={styles.infoTitle}>Director</Text>
                    <Text style={styles.infoText}>George Lucas</Text>
                    <Text style={styles.infoTitle}>Producer</Text>
                    <Text style={styles.infoText}>Rick McCallum</Text>
                    <Text style={styles.infoTitle}>Release Date</Text>
                    <Text style={styles.infoText}>19-05-1999</Text>
                </View>
            </View>
            
            <View style={styles.filmsDescription}>
                <Text style={styles.infoFilmsDetailText}>
                    Lorem ipsum class justo sociosqu sapien turpis 
                    lorem donec ipsum curabitur, nisi libero risus facilisis urna 
                    himenaeos aliquam integer eu at, vehicula neque bibendum augue
                     velit id sociosqu egestas volutpat. dapibus adipiscing lorem donec 
                     convallis turpis hendrerit sed velit, pretium duis habitasse luctus 
                     habitasse accumsan lacinia vitae, consequat rhoncus duis rhoncus 
                     pulvinar quam himenaeos. velit torquent senectus integer justo 
                     pretium tincidunt conubia duis lorem rutrum habitant luctus felis 
                     proin, consequat litora fringilla metus leo pretium et habitasse 
                     elementum orci nam nostra iaculis. congue curabitur pulvinar ligula 
                     ante nam tempor cras pharetra, lacinia tristique suspendisse augue 
                     in tempor consequat sociosqu, luctus lobortis sapien curae mi 
                     lobortis nec. 
                </Text>
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
      fontSize:20,
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
      textAlign:'justify'
  },
  espaco:{
    marginRight:35,
  }
});
