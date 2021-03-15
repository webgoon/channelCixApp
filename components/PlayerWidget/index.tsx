import React, {useContext, useEffect, useState} from 'react';
import { Text, Image,  View, TouchableOpacity } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import MarqueeText from 'react-native-marquee';
import styles from './styles';

import { Audio } from "expo-av";

import { Song } from "../../types";

import {Sound} from "expo-av/build/Audio/Sound"

  // Must set for props to attach to imported song
  const song = {
      id: '4',
      uri: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
      imageUri: 'https://media.redbullmusicacademy.com/assets/Black_Milk_by_Maxwell_Schiano-2.132b8df9.jpg',
     
     title: 'This should be a scrolling marquee testing which is going to be the artist song title....',
      artist: 'Black Milk',
  }

const PlayerWidget = () => {

  const [sound, setSound] = useState<Sound|null>(null);  // Defines sound used in PressPlay Function
  const [isPlaying, setIsPlaying] = useState<boolean>(true);  // Sets the state if song is playing or not
  const [duration, setDuration] = useState<number|null>(null);
  const [position, setPosition] = useState<number|null>(null);




  const onPlaybackStatusUpdate = (status) => {
    // Will display the song in the console during playback
    console.log('-- OnPlayBackStatusUpdate --');
    console.log(status);

    setIsPlaying(status.isPlaying);
    setDuration(status.durationMillis);
    setPosition(status.positionMillis);
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


  


  // Get the progress on the song during playback
  const getProgress = () => {
    if (sound === null || duration === null || position === null) {
      // displays no sound and no position
      return 0;
    }

    return (position / duration) * 100;
  }

  if (!song) {
    return null;
  }



  return (
    <View style={styles.container}>
      {/* Status Indicator   {getProgress()}   */}
      <View style={[styles.indicatorPwStrip, { width: `${getProgress()}%`}]} />
      <View style={styles.row}>

     
      {/* Image Cover */}
      <Image style={styles.image} source={{ uri: song.imageUri }}  />

    
      <View style={styles.rightContainer}>
        
                <View style={styles.nameContainer}>
                  {/* Artist */}
                  <Text style={styles.artist}>{song.artist}</Text>
                  {/* Title */}
                  <MarqueeText
                    style={styles.title}
                    marqueeDelay={5}
                    duration={20000}
                   
                   
                    marqueeOnStart={true}
                    onMarqueeComplete={true}
                    loop={true}
                   
                    marqueeResetDelay={1000}
                  >
                   {song.title}
                  </MarqueeText>
                </View>


                <View style={styles.iconsContainer}>
                  <AntDesign style={styles.pwlikeIcon} name="heart" size={20} color={"green"} />
                  <TouchableOpacity onPress={onPlayPausePress}>
                    <FontAwesome style={styles.pwPlayIcon}   name={isPlaying ? 'pause' : 'play'} size={20} color={"green"} />
                  </TouchableOpacity>
                </View>

       </View>  
     
     </View>
    </View>
  )
}

export default PlayerWidget;


