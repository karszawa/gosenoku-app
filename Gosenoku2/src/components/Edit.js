import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import styled from 'styled-components/native';
import { Container, Header, Left, Body, Title, Right, Content, Footer, FooterTab, Button, Icon, Input, Item } from 'native-base';
// import ImagePicker from 'react-native-image-picker';
var ImagePicker = require('react-native-image-picker');

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

    this.state = { imageSource: null };
  }

  addImageButtonPressed() {
    const options = {
      title: '画像を選択する',
      customButtons: [ ],
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if(response.didCancel) {
        console.log('User cancelled image picker');
      } else if(response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if(response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = { uri: response.uri };

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          imageSource: source
        });
      }
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

          { this.state.imageSource && <Image source={ this.state.imageSource} style={{ }} /> }

          <Button block light style={{ height: 100, marginTop: 10 }} onPress={ this.addImageButtonPressed.bind(this) }>
            <Text>{ this.state.imageSource ? 'もう一度とる' : '写真をとる' }</Text>
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
