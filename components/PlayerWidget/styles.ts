import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 49,
    backgroundColor:  '#131313',
    flexDirection: 'column',
    width: '100%',
    borderWidth: 5,
    borderColor: 'black',
    borderBottomColor: 'white',
    //alignItems: 'center',
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  row: {
    flexDirection: 'row',
  },
  indicatorPwStrip: {
    height: 5,
    //width: '100%',
    backgroundColor: '#bcbcbc',
  },
  image: {
   width:  75,
   height: 75,
   marginRight: 10,
  
    
  },
  rightContainer: {
    position: 'relative',
    flex: 1,
    flexDirection: 'row',
    color: 'white',
    justifyContent: 'space-between',
    overflow: 'visible',
    zIndex: -1,
    
  },
  nameContainer: {
      flexDirection: 'row',
      color: 'white',
      alignItems: 'center',
  },
  iconsContainer: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    width: 100,
    justifyContent: 'space-between',
    padding: 15,
    color: 'white',
    backgroundColor: '#131313',
    height: 60,
    zIndex: 100,
    
    
    
  },
  pwlikeIcon: {
    marginLeft: -10,
    marginRight: 10,
  },
  pwPlayIcon: {
    marginLeft: 20,
    paddingRight: 10,
  },
  artist: {
    marginRight: 10,
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    justifyContent: 'space-between',
  },
  title: {
    color: 'white',
    
    fontSize: 14,
    
    fontStyle: 'italic',
    justifyContent: 'space-between',
    zIndex: -10,
    width: 150,
    overflow: 'hidden',

   
    
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
