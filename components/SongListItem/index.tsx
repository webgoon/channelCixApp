import React from 'react'
import { Text, View, Image } from 'react-native';

import styles from './styles';
import {Song} from "../../types";




export type SongListItemProps = {
  song: Song
}

const SongListItem = (props: SongListItemProps) => {
  
  // Must set for props to attach to imported song
  const { song } = props;

  return (
    <View style={styles.container}>
      {/* Image Cover */}
      <Image style={styles.image} source={{ uri: song.imageUri }}  />

      <View style={styles.rightContainer}>
         {/* Title */}
        <Text style={styles.title}>{song.title}</Text>
        {/* Artis */}
        <Text style={styles.artist}>{song.artist}</Text>
      </View>

    </View>
  )
}

export default SongListItem;


