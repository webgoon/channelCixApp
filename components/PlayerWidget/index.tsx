import React from 'react'
import { Text, View, Image } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import Marquee from "react-fast-marquee";

import styles from './styles';
import {Song} from "../../types";


const PlayerWidget = () => {
  
  // Must set for props to attach to imported song
  const song = {
      id: '4',
      imageUri: 'https://media.redbullmusicacademy.com/assets/Black_Milk_by_Maxwell_Schiano-2.132b8df9.jpg',
      artistsHeadline: 'BLACK MILK "LIL RANDOS" beat series pt.1',
      title: ' - Heavy Hypnosis (mpc 3000 sketch)',
      artist: 'Black Milk',
  }

  return (
    <View style={styles.container}>
      {/* Image Cover */}
      <Image style={styles.image} source={{ uri: song.imageUri }}  />

     
      <View style={styles.rightContainer}>
        
                <View style={styles.nameContainer}>
                  {/* Artist */}
                  <Text style={styles.artist}>{song.artist}</Text>
                  {/* Title */}
                  <Text style={styles.title}>{song.title}</Text>          
                </View>


                <View style={styles.iconsContainer}>
                  <AntDesign  name="heart" size={30} color={"green"} />
                  <AntDesign  name="play" size={30} color={"green"} />
                </View>

       </View>  
    </View>
  )
}

export default PlayerWidget;


