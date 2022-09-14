import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import Button from '../../components/Button';
import {Layout, Navigation} from 'react-native-navigation';
import {modalStack} from '../../constants/navigationConstants';

interface Props {
  rootTag?: number;
  initialProps?: {
    componentId: String;
  };
}

const MoreScreen = (props: Props) => {
  const clickAction = () => {
    Navigation.showModal(modalStack);
  };

  return (
    <View style={styles.root}>
      <Button
        text={'Open Modal'}
        action={clickAction}
        customStyle={{marginTop: '30%'}}
      />
    </View>
  );
};

export default MoreScreen;
