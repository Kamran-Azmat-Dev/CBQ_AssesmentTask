import React from 'react';
import {View} from 'react-native';
import styles from './styles'

interface Props {
  rootTag?:number,
  initialProps?:{
    componentId:String
  }
}

 const HomeScreen = (props:Props) => {
  return (
    <View style={styles.root}>
    </View>
  );
};


export default HomeScreen;
