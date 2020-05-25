import React, {createContext, useState} from 'react';
import {Animated} from 'react-native';
import styled from 'styled-components/native';

const MessageContext = createContext({});
import {colors} from '~/styles';

export const MessageProvider: React.FC = ({children}) => {
  const [msg, setMessage] = useState('');
  const [anim] = useState(new Animated.Value(0));

  const store = {
    showAlert: (param: any) =>
      Animated.timing(anim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start(() => {
        setMessage(param.msg);
        setTimeout(() => {
          anim.setValue(-100);
          setMessage('');
        }, 4000);
      }),
  };

  return (
    <MessageContext.Provider value={store}>
      <MessageArea
        as={Animated.View}
        style={{
          bottom: anim.interpolate({
            inputRange: [0, 1],
            outputRange: [-100, 0],
          }),
        }}>
        <MessageText>{msg}</MessageText>
      </MessageArea>

      {children}
    </MessageContext.Provider>
  );
};

const MessageArea = styled.View`
  height: 80px;
  background-color: ${colors.primary};
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 1000;
  width: 100%;
`;

const MessageText = styled.Text`
  color: ${colors.white};
  font-size: 18px;
`;

export default MessageContext;
