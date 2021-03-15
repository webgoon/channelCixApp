import React, {useContext, useEffect, useState} from 'react';
import { Text, Image,  View, TouchableOpacity } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

import styles from './styles';

import { Audio } from "expo-av";

import { Song } from "../../types";

import {Sound} from "expo-av/build/Audio/Sound"

  // Must set for props to attach to imported song
  const song = {
      id: '4',
      uri: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
      imageUri: 'https://media.redbullmusicacademy.com/assets/Black_Milk_by_Maxwell_Schiano-2.132b8df9.jpg',
      title: 'Testing Mp3 Yo!',
      artist: 'Black Milk',
  }

const PlayerWidget = () => {

  const [sound, setSound] = useState<Sound|null>(null);  // Defines sound used in PressPlay Function
  const [isPlaying, setIsPlaying] = useState<boolean>(true);  // Sets the state if song is playing or not




  const onPlaybackStatusUpdate = (status) => {
    console.log('-- OnPlayBackStatusUpdate --');
    console.log(status);

    setIsPlaying(status.isPlaying);
  }


  const playCurrentSong = async () => {

    // Destroys The Previous Instance Of A Song to avoid repeat on refresh
    // Ensures One song can be played at a time
    if (sound) {
      await sound.unloadAsync();
    }

    const { sound: newSound } =  await Sound.createAsync(
      { uri: song.uri },
      //{ shouldPlay: true },  Plays on auto load
      { shouldPlay: isPlaying },
      onPlaybackStatusUpdate
    )
    setSound(newSound)
    
    
   
  }


  useEffect(() => {
    console.log('Player Widget UseEffect Activated')

    // Play the song
    playCurrentSong();
    
  }, [])


   // Actions To Play And Pause Song
   const onPlayPausePress = async () => {
    if (!sound) {
      return;
    }
    
    if (isPlaying) {
      await sound.stopAsync();
    } else {
      await sound.playAsync();
    }
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
                  <AntDesign style={{marginRight: 10}} name="heart" size={30} color={"green"} />
                  <TouchableOpacity onPress={onPlayPausePress}>
                    <FontAwesome   name={isPlaying ? 'pause' : 'play'} size={30} color={"green"} />
                  </TouchableOpacity>
                </View>

       </View>  
    </View>
  )
}

export default PlayerWidget;


