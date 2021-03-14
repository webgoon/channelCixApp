import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { Album } from '../../types';
import styles from './styles';

export type AlbumHeaderProps = {
  album: Album;
}

const AlbumHeader = (props: AlbumHeaderProps) => {

  console.log(props);

  const { album } = props;

  return (
    <View style={styles.container}>
     {/* Cover Image */}
      <Image source={{ uri: album.imageUri }} style={styles.image} />
     {/* Name */}
      <Text style={styles.nameText}>{ album.name }</Text>

     {/* Creator & Number Of Likes */}
      <View style={styles.creatorContainer}>
          <Text style={styles.by}>By {album.by} </Text>
          <Text style={styles.numberOfLikes}> {album.numberOfLikes} Likes </Text>
      </View>
     {/* Play Button */}

     <TouchableOpacity>
       <View style={styles.buttonBig}>
          <Text style={styles.buttonText}>PLAY</Text>
       </View>
     </TouchableOpacity>


    </View>
  )
}

export default AlbumHeader;
