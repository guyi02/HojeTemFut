import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import UserType from '~/pages/Register/UserType';
import RegisterPlayer from '~/pages/Register/RegisterPlayer';
import RegisterTeam from '~/pages/Register/RegisterTeam';
import UploadArea from '~/pages/Register/UploadArea';

const RegisterStack = createStackNavigator(
  {
    UserType: {
      screen: UserType,
      navigationOptions: {
        header: null,
      },
    },
    RegisterPlayer: {
      screen: RegisterPlayer,
      navigationOptions: {
        header: null,
      },
    },
    RegisterTeam: {
      screen: RegisterTeam,
      navigationOptions: {
        header: null,
      },
    },
    UploadArea: {
      screen: UploadArea,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'UserType',
  },
);

export default createAppContainer(RegisterStack);
