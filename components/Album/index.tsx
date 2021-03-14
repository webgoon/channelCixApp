import React from 'react'
import { View, Image, Text, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import { Album } from '../../types';



export type AlbumProps = {
  
  album: Album,
  
}

// Function Component not a class component
const AlbumComponent = (props: AlbumProps) => {


  console.log('19: Album tsx.');
  console.log(props);

  // Set up to change screens
  const navigation = useNavigation();


  // The fucntion on touch to change screens and pass data to next screen
  const onPress  = () => {
    //console.warn(`Album Pressed: ${props.album.artistsHeadline}`)
    //navigation.navigate('AlbumScreen')
    navigation.navigate('AlbumScreen', { id: props.album.id })

  }

  return (
    <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.container}>
      
          {/* Item of the album */}
          <Image
            source={{ uri: props.album.imageUri }}
            style={styles.image}
          />

          {/* Artist Head Line */}
          <Text style={styles.text}>Headline - { props.album.artistsHeadline }</Text>
      

    </View>
    </TouchableWithoutFeedback>
  )
}

export default AlbumComponent;
