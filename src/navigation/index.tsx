import {Navigation} from 'react-native-navigation';
import HomeScreen from '../screens/HomeScreen';
import MoreScreen from '../screens/MoreScreen';
import Modal from '../components/Modal';
import AddDataModal from '../components/AddDataModal';
import {rootStack} from '../constants/navigationConstants';
import ReduxWrapper from '../components/ReduxWrapper'

Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('More', () => MoreScreen);
Navigation.registerComponent('MainModal', () => ReduxWrapper(Modal));
Navigation.registerComponent('AddDataModal', () => ReduxWrapper(AddDataModal));

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: rootStack,
  });
});
