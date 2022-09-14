import {SafeAreaView,TextInput} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {useState} from 'react';
import Button from '../Button';
import styles from './style';
import {connect, useSelector, useDispatch} from 'react-redux';
import {saveData} from '../../redux/actions/data.action';
import React from 'react';

interface Props {
  rootTag?: number;
  componentId: string;
  initialProps?: {
    componentId: string;
  };
}

const AddModalData = (props:Props) => {
  const dispatch = useDispatch();

    const [newData,setNewData]=useState({id:1,title:''})
    const data = useSelector((state: any) => {
      return state.dataReducer.data;
    });
    const [length, setLength] = useState(data.length+1);

    const doneButtonAction=()=>{
        dispatch(saveData(newData) as any);
        Navigation.pop(props.componentId);
    }

  return (
    <SafeAreaView
      style={styles.container}>
      <TextInput
        multiline={true}
        numberOfLines={4}
        onChangeText={text => setNewData({id: length, title: text})}
        value={newData.title}
        placeholder={'Add your text here'}
        style={styles.textInput}
      />
      <Button
        text={'Done'}
        action={doneButtonAction}
        customStyle={{marginTop: '15%'}}
      />
    </SafeAreaView>
  );
};

export default connect()(AddModalData);
