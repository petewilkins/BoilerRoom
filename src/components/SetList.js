import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class SetList extends Component {
  state = { sets: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ sets: response.data }));
  }

  render() {
    console.log(this.state);

    return (
      <View>
        <Text>Set List!</Text>
      </View>
    );
  }
}

export default SetList;
