import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Loading from './src/components/Loading';
import Login from './src/components/Login';
import Edit from './src/components/Edit';
import Confirmation from './src/components/Confirmation';
import Done from './src/components/Done';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scene: 'loading'
    };
  }

  changeScene(nextScene) {
    this.setState({ scene: nextScene });
  }

  render() {
    return <Edit changeScene={ this.changeScene.bind(this) }/>;

    switch(this.state.scene) {
      case 'loading': return <Loading changeScene={ this.changeScene.bind(this) }/>;
      case 'login': return <Login changeScene={ this.changeScene.bind(this) }/>;
      case 'edit': return <Edit changeScene={ this.changeScene.bind(this) }/>;
      case 'confirmation': return <Confirmation changeScene={ this.changeScene.bind(this) }/>;
      case 'done': return <Done changeScene={ this.changeScene.bind(this) }/>;
      default: return null;
    }
  }
}
