import {createAppContainer, createSwitchNavigator} from 'react-navigation';
// APP NAVIGATIONS
import PlayerStack from '~/navigations/PlayerStack';
// AUTH NAVIGATIONS
import AuthStack from '~/navigations/AuthStack';
// Register NAVIGATIONS
import RegisterStack from '~/navigations/RegisterStack';

import LoadingScreen from '~/navigations/LoadingScreen';
import StepsPage from '~/pages/Steps';

// SWITCH DE ROTAS PRIMÁRIAS
const Routes = createAppContainer(
  createSwitchNavigator(
    {
      LoadingScreen,
      StepsPage,
      RegisterStack,
      AuthStack,
      PlayerStack,
      // TeamStack,
    },
    {
      initialRouteName: 'LoadingScreen',
    },
  ),
);

export default createAppContainer(Routes);
