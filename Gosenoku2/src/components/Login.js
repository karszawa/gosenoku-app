import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Auth0Lock from 'react-native-lock';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.lock = new Auth0Lock({ clientId: 'ZvESwggvklDcxl-OJiwZ2FFTfLY3Q3MW', domain: 'gosenoku.auth0.com' });
  }

  componentDidMount() {
    this.lock.show({}, (err, profile, token) => {
      console.log(err);
      console.log(profile);
      console.log(token);
      if (err) {
        console.log(err);
        return;
      }
      // Authentication worked!
      console.log('Logged in with Auth0!');
    });
  }

  render() {
    return (
      <View>
        <Text>
          Hoge
        </Text>
      </View>
    );
  }
}
