import React, {useEffect} from 'react';
import { View, Text, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';


import SongListItem from '../components/SongListItem';
import AlbumHeader from '../components/AlbumHeader';

import albumDetails from '../data/albumDetails';





/*
Setting up to Catch Data To this page
import React, {useEffect} from 'react';
import { useRoute } from '@react-navigation/native';
useEffect(() => { return () => {} }, [])
*/



const AlbumScreen = () => {

  const route = useRoute();

  useEffect(() => {
    console.log('Read Use Effect');
    console.log(route);
    {/* effect  */}


    return () => {
      {/* cleanup */ }
    }
  }, [])


  return (
    <View>
    
      {/*  <SongListItem song={ albumDetails.songs[0] } />    */}
      

      <FlatList
        data={albumDetails.songs}
        renderItem={({ item }) => <SongListItem song={item} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => <AlbumHeader album={albumDetails} />}
      />
    
    </View >
  )
}  

export default AlbumScreen;
