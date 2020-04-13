import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from '~/pages/Auth/Login';
import Register from '~/pages/Auth/Register';

const AuthStack = createStackNavigator(
    {
        Login,
        Register,
    }, {
        initialRouteName: "Login"
    });

export default createAppContainer(AuthStack)