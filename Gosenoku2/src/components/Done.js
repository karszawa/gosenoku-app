import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Header, Title, Footer, FooterTab, Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

export default class Done extends React.Component {
  onComplete() {
    this.props.clearResources();
    this.props.changeScene('edit');
  }

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Sweet Tweet</Title>
          </Body>
        </Header>

        <Content contentContainerStyle={{ flexDirection: 'column' }}>
          <Card style={{ marginTop: 5 }}>
            <CardItem>
              <Left>
                <Thumbnail source={{ url: 'https://pbs.twimg.com/profile_images/875864983480827904/6IGeT-pc_400x400.jpg' }} />
                <Body>
                  <Text>siquare</Text>
                  <Text note>June 18, 2017</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image style={{ height: 300, width: 300, alignSelf: 'center', borderRadius: 5 }} source={{ uri: this.props.img }} />
                <Text style={{ marginTop: 20, marginBottom: 20 }}>
                  { this.props.text }
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>

        <Footer>
          <FooterTab>
            <Button full success style={{ width: '80%', alignSelf: 'center' }} onPress={ this.onComplete.bind(this) }>
              {/* <Icon name="logo-github" /> */}
              <Text style={{ color: 'white' }}>確認</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
