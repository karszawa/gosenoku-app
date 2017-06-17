import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';

const CenteredView = styled.View`
  width: 100%;
  height: 100%;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default class Edit extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <CenteredView>
        <Text>
          HOGOHEGHEO
        </Text>
      </CenteredView>
    );
  }
}
