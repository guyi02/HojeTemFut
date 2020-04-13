import React, { Component } from 'react';

import { View } from 'react-native';

import { Container, Spinner } from './styles';

export default class CenterSpinner extends Component {
  render() {
    return (
        <Container>
            <Spinner/>
        </Container>
    );
  }
}
