import React from 'react';
import {View, Text,} from 'react-native';
import styles from './style'

type CardProps = {
  title: string;
};

const Card = ({title}: CardProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default Card;
