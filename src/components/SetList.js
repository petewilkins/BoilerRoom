import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import SetDetail from './SetDetail';

class SetList extends Component {
  state = { sets: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ sets: response.data }));
  }

  renderSets() {
    return this.state.sets.map(set =>
      <SetDetail key={set.title} set={set} />
    );
  }

  render() {
    console.log(this.state);

    return (
      <View>
        {this.renderSets()}
      </View>
    );
  }
}

export default SetList;
