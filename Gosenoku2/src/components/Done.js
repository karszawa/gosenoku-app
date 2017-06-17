import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Done extends React.Component {
  onComplete() {
    this.props.clearResources();
    this.props.changeScene('edit');
  }

  render() {
    return (
      <View>
        <Text>投稿完了！</Text>
        <Button onPress={ this.onComplete.bind(this) } title='確認' />
      </View>
    );
  }
}
