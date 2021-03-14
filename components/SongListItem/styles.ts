import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,

  },
  rightContainer: {
    justifyContent: 'space-around',
    marginLeft: 10,
  },
  image: {
   width:  75,
   height: 75,
  
    
  },
  title: {
    fontSize: 20,
    color: 'red'
    
  },
  artist: {
    color: 'gray',
    fontSize: 14,
    fontStyle: 'italic'
    
  },
  text: {
    color: 'green'
    
  }
})

export default styles;
