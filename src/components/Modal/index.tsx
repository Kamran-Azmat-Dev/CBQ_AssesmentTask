import {FlatList, SafeAreaView, ActivityIndicator} from 'react-native';
import Card from '../Card';
import {Navigation} from 'react-native-navigation';
import {Dispatch, useEffect, useState} from 'react';
import styles from './style'
import {addModelDataComponent} from '../../constants/navigationConstants'
import {connect,useSelector,useDispatch} from 'react-redux';
import {fetchData} from '../../redux/actions/data.action'
import React from 'react';
import { AnyAction } from 'redux';


interface Props {
  rootTag?: number;
  componentId: string;
  initialProps?: {
    componentId: string;
  };
}

 interface Item {
   id: number;
   title: string;
 }


interface RootState {
  dataReducer:{
  data?: Item[] | undefined;
  isLoading?: boolean;
  errors?: object;
  }
}

const Modal = (props: Props) => {
  const data = useSelector((state: RootState) => {
    return state.dataReducer.data;
  });
  const isLoading = useSelector(
    (state: RootState) => state.dataReducer.isLoading,
  );
  const dispatch = useDispatch()

  useEffect(() => {
    if (!data || data?.length === 0) dispatch(fetchData() as any);

    // This listner is used to check the modal button click event
    const navigationButtonEventListener =
      Navigation.events().registerNavigationButtonPressedListener(
        ({buttonId}) => {
          if (buttonId === 'add') {
            Navigation.push(props.componentId, addModelDataComponent);
          }
        },
      );

    return () => {
      navigationButtonEventListener.remove();
    };
  }, []);


  const renderItem = ({item}:{item:Item}) => <Card title={item.title} />;

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator
          style={styles.activityIndicator}
          size="large"
          color="gray"
        />
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item:Item) => String(item.id)}
        />
      )}
    </SafeAreaView>
  );
};

export default connect()(Modal);
