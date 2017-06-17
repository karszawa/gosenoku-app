import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Loading extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // TODO: check twitter auth token

    this.props.changeScene('login');
  }

  render() {
    return (
      <View>
        <Text>
          Loading now
        </Text>
      </View>
    );
  }
}
