import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Loading from './src/components/Loading';
import Login from './src/components/Login';
import Edit from './src/components/Edit';
import Confirmation from './src/components/Confirmation';
import Done from './src/components/Done';

import Twitter from './src/lib/twitter';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scene: 'edit',
      text: null,
      img: null
    };

    this.twitter = new Twitter();

    this.twitter.post('ほよほよ', 'https://stat.ameba.jp/user_images/20170507/13/ringworldengineer/85/27/j/o0600069313931564356.jpg');
  }

  changeScene(nextScene) {
    this.setState({ scene: nextScene });
  }

  tweet(text, img, callback) {
    this.setState({ text: text, img: img });

    this.twitter.post(text, img);

    callback();
  }

  clearResources() {
    this.setState({ text: null, img: null });
  }

  render() {
    // return <Done text="今日は初の台湾まぜそばを食べた" img="https://pbs.twimg.com/profile_images/875864983480827904/6IGeT-pc_400x400.jpg" />
      // return <Edit changeScene={ this.changeScene.bind(this) }/>;

      switch(this.state.scene) {
        case 'loading': return <Loading changeScene={ this.changeScene.bind(this) }/>;
        case 'login': return <Login changeScene={ this.changeScene.bind(this) }/>;
        case 'edit': return <Edit changeScene={ this.changeScene.bind(this) } tweet={ this.tweet.bind(this) }/>;
        case 'confirmation': return <Confirmation changeScene={ this.changeScene.bind(this) }/>;
        case 'done': return <Done changeScene={ this.changeScene.bind(this) } clearResources={ this.clearResources.bind(this) } text={this.state.text} img={this.state.img} />;
      default: return null;
    }
  }
}
