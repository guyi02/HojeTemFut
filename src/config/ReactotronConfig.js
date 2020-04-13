import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

if (__DEV__) {
  const tron = Reactotron.configure()
    .useReactNative()
    .use(reactotronRedux())
    .use(sagaPlugin())
    .configure({ host: '192.168.15.25' })
    .connect();

  tron.clear();

  console.tron = tron;
}
