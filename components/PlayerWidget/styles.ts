import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 49,
    backgroundColor:  '#131313',
    flexDirection: 'row',
    width: '100%',
    borderWidth: 5,
    borderColor: 'black',
    borderBottomColor: 'white',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  image: {
   width:  75,
   height: 75,
   marginRight: 10,
  
    
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    color: 'white',
    justifyContent: 'space-between',
  },
  nameContainer: {
      flexDirection: 'row',
      color: 'white',
      alignItems: 'center',
  },
  iconsContainer: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: -70,
    color: 'white',
    alignItems: 'center',
    width: 100,
    backgroundColor: '#131313',
    height: 60,
    justifyContent: 'space-around',
    
    
  },
  title: {
    color: 'white',
    fontSize: 14,
    
    fontStyle: 'italic',
    justifyContent: 'space-between',
   
    
  },
  artist: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    justifyContent: 'space-between',
  },
  text: {
    color: 'green'
    
  },
  playBtnBlock: {
    backgroundColor: 'red',
    flexDirection: 'row',
    
  },
})

export default styles;
