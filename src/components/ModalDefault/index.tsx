import React, {ReactElement} from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';

interface ModalParams {
  children: ReactElement;
  change: (status: boolean) => void;
  visible: boolean;
  heightModal: number;
}

import {Container, Body} from './styles';

const ModalDefault: React.FC<ModalParams> = ({
  children,
  change,
  visible,
  heightModal,
}) => {
  return (
    <Container>
      <Modal
        style={{margin: 0}}
        isVisible={visible}
        propagateSwipe
        onSwipeComplete={() => change(false)}
        swipeDirection="down"
        animationOut="fadeOutDownBig">
        <Body heightModal={heightModal}>{children}</Body>
      </Modal>
    </Container>
  );
};

export default ModalDefault;
