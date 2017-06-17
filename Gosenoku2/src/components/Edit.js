import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import styled from 'styled-components/native';
import { Container, Header, Left, Body, Title, Right, Content, Footer, FooterTab, Button, Icon, Input, Item } from 'native-base';
// import * as ImagePicker from 'react-native-image-picker';
// var ImagePicker = require('react-native-image-picker');
import * as convertUtils from '../lib/convertUtils';
import { ImagePicker } from 'expo';

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

    this.state = {
      text: null,
      img: null
    };
  }

  async addImageButtonPressed() {
    let result = await ImagePicker.launchCameraAsync({ aspect: [ 1, 1 ] });

    if(!result.cancelled) {
      this.setState({ img: result.uri });
    }
  }

  convertResources() {
    convertUtils.convertText((text) => {
      this.setState({ text: text });
    });

    convertUtils.convertImg((img) => {
      this.setState({ img: img });
    });
  }

  tweet() {
    if(!this.state.img) {
      alert('画像がないと面白くないよ！');
      return;
    }

    this.props.tweet(this.state.text, this.state.img, () => {
      this.changeScene('done');
    });
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

          { this.state.img && <Image source={{ uri: this.state.img }} style={{ width: '80%', height: '80%', borderRadius: 5, alignSelf: 'center', marginTop: 10 }} /> }

          <Button block light style={{ height: 100, marginTop: 10, borderRadius: 5 }} onPress={ this.addImageButtonPressed.bind(this) }>
            <Text>{ this.state.img ? 'もう一度とる' : '写真をとる' }</Text>
          </Button>
        </Content>

        <Footer>
          <FooterTab>
            <Button full onPress={ this.convertResources.bind(this) }>
              <Text>スイート</Text>
            </Button>
          </FooterTab>

          <FooterTab>
            <Button full onPress={ this.tweet.bind(this) }>
              <Text>ツイート</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
