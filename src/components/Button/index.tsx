import React from 'react';
import { TouchableOpacity } from 'react-native';
import {Text} from 'react-native'
import styles from './style';

type ButtonProps = {
  action(): void;
  text: string;
  customStyle: object;
};


const Button = ({text, action, customStyle}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.buttonBody, customStyle]}
      onPress={() => action()}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
