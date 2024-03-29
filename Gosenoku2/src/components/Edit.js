import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import styled from 'styled-components/native';
import { Container, Header, Left, Body, Title, Right, Content, Footer, FooterTab, Button, Icon, Input, Item } from 'native-base';
import * as convertUtils from '../lib/convertUtils';
import { ImagePicker } from 'expo';
import Spinner from 'react-native-loading-spinner-overlay';
import CustomHeader from './Header';

export default class Edit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: null,
      img: null,
      loadingCounter: 0
    };
  }

  async addImageButtonPressed() {
    let result = await ImagePicker.launchCameraAsync({ aspect: [ 1, 1 ] });
    // let result = await ImagePicker.launchImageLibraryAsync({ aspect: [ 1, 1 ] });

    if(!result.cancelled) {
      this.setState({ img: result.uri });
    }
  }

  increaseCounter(d) {
    this.setState({ loadingCounter: this.state.loadingCounter + d });
  }

  completedSomeResource() {
    const counter = this.state.loadingCounter;

    this.setState({ loadingCounter: this.state.loadingCounter - 1 });
  }

  convertResources() {
    this.increaseCounter((this.state.text ? 1 : 0) + (this.state.img ? 1 : 0));

    if(this.state.text) {
      convertUtils.convertText(this.state.text, (newText) => {
        this.setState({ text: newText });
        this.completedSomeResource();
      });
    }

    if(this.state.img) {
      convertUtils.convertImg(this.state.img, (newImg) => {
        this.setState({ img: newImg });
        this.completedSomeResource();
      });
    }
  }

  tweet() {
    if(!this.state.img) {
      alert('画像がないと面白くないよ！');
      return;
    }

    this.props.tweet(this.state.text, this.state.img, () => {
      this.props.changeScene('done');
    });
  }

  render() {
    return (
      <Container style={{ backgroundColor: 'white' }}>
        <CustomHeader />

        <Content contantContainerStyle={{ flexDirection: 'column', alignItems: 'center' }}>
          <Item underline>
            <Input
              placeholder='いまどうしてる？'
              onChangeText={ (text) => this.setState({ text: text }) }
              value={ this.state.text }
              style={{ height: 160, textAlignVertical: 'top', marginTop: 10, backgroundColor: 'white' }} multiline={true}
            />
          </Item>

          { this.state.img && <Image source={{ uri: this.state.img }} style={{ width: '80%', height: '80%', borderRadius: 5, alignSelf: 'center', marginTop: 10 }} /> }

          <Button block light style={{ height: 100, marginTop: 10, borderRadius: 5 }} onPress={ this.addImageButtonPressed.bind(this) }>
            <Icon name="camera" style={{ fontSize: 35 }} />
            <Text style={{ fontSize: 20 }}>{ this.state.img ? 'もう一度とる' : '写真をとる' }</Text>
          </Button>

          { !this.state.img && <Image source={require('../../assets/images/cake.jpg')} style={{ paddingTop: 200, width: 200, height: 200, alignSelf: 'center' }} /> }
        </Content>

        <Footer>
          <FooterTab>
            <Button full onPress={ this.convertResources.bind(this) } style={{ flexDirection: 'row', backgroundColor: '#E57373' }}>
              <Icon name="ios-ice-cream-outline" style={{ fontSize: 25, color: 'white' }} />
              <Text style={{ color: 'white' }}>スイート</Text>
            </Button>
          </FooterTab>

          <FooterTab>
            <Button full onPress={ this.tweet.bind(this) } style={{ flexDirection: 'row', backgroundColor: '#6d4c41' }}>
              <Icon name="md-send" style={{ fontSize: 25, color: 'white' }} />
              <Text style={{ color: 'white' }}>ツイート</Text>
            </Button>
          </FooterTab>
        </Footer>

        <Spinner visible={this.state.loadingCounter > 0} textContent={"Loading..."} textStyle={{color: '#FFF'}} />
      </Container>
    );
  }
}
