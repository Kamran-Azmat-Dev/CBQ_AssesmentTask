import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    backgroundColor: 'whitesmoke',
  },
  activityIndicator:{
    display:'flex',
    justifyContent:'center',
    alignSelf:'center',
    marginTop: windowHeight * 0.5,
    marginLeft: windowWidth *0.5,
    position: 'absolute'
  }
});

export default styles;
