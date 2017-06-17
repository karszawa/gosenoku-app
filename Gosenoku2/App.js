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
      scene: 'loading',
      text: null,
      img: null
    };
  }

  changeScene(nextScene) {
    this.setState({ scene: nextScene });
  }

  tweet(text, img, callback) {
    this.setState({ text: text, img: img });

    alert('tweet!: ' + text);
  }

  clearResources() {
    this.setState({ text: null, img: null });
  }

  render() {
    return <Login />;
    return <Edit changeScene={ this.changeScene.bind(this) }/>;

    switch(this.state.scene) {
      case 'loading': return <Loading changeScene={ this.changeScene.bind(this) }/>;
      case 'login': return <Login changeScene={ this.changeScene.bind(this) }/>;
      case 'edit': return <Edit changeScene={ this.changeScene.bind(this) } tweet={ this.tweet.bind(this) }/>;
      case 'confirmation': return <Confirmation changeScene={ this.changeScene.bind(this) }/>;
      case 'done': return <Done changeScene={ this.changeScene.bind(this) } text={this.state.text} img={this.state.img} />;
      default: return null;
    }
  }
}
