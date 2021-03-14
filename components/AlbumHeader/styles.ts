import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
   
    marginTop: 20,
    marginBottom: 20,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  text: {
    color: 'white',
    fontSize: 24,
  },
  image: {
    width: 200,
    height: 200,
  },
  by: {
    color: 'white',
    fontStyle: 'italic',
  },
  numberOfLikes: {
    color: 'white',
    fontWeight: 'bold',
  },  
  nameText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    
  },
  creatorContainer: {
    margin: 10,
    fontSize: 15,
    flexDirection: "row",
   
   
   
  },
  creator: {
    color: 'gray',
    margin: 5,
    fontSize: 20,
  },
  buttonBig: {
    padding: 2,
    height: 50,
    width: 200,
    backgroundColor: 'teal',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    
   
    
  }
})


export default styles;
