import React from 'react';
import { Header, Body, Title } from 'native-base';

export default class CustomHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Header>
        <Body style={{ marginTop: 15 }}>
          <Title style={{ color: '#5d4037', fontFamily: 'Zapfino', backgroundColor: 'transparent', width: '100%' }}>Sweet Tweet</Title>
        </Body>
      </Header>
    );
  }
}
