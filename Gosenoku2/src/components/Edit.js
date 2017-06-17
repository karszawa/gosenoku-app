import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import styled from 'styled-components/native';
import { Container, Header, Left, Body, Title, Right, Content, Footer, FooterTab, Button, Icon, Input, Item } from 'native-base';

const CenteredView = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  flex-direction: column;
`;

const styles = StyleSheet.create({
  container: {
    height: '50%',
    width: '100%',
    borderWidth: 1,
    textAlignVertical: 'top'
  }
});

export default class Edit extends React.Component {
  constructor(props) {
    super(props);
  }

  

  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Sweet Tweet</Title>
          </Body>
          <Right />
        </Header>
        <Content contantContainerStyle={{ flexDirection: 'column', alignItems: 'center' }}>
          <Item underline>
            <Input placeholder='いまどうしてる？' style={{ height: 160, textAlignVertical: 'top', marginTop: 10 }} multiline={true}/>
          </Item>
          <Button block light style={{ height: 100, marginTop: 10 }} onPress={ }>
            <Text>2. 画像を追加する</Text>
          </Button>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Post</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
