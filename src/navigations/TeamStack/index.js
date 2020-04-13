import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Players from '~/pages/Players';
import Player from '~/pages/Player';

const PlayerStack = createStackNavigator(
    {
        Players: {
            screen: Players,
            navigationOptions: {
                header: null
            }
        },
        Player: {
            screen: Player,
            navigationOptions: {
                header: null
            }
        }
    }, {
    initialRouteName: "Players"
});

export default createAppContainer(PlayerStack)