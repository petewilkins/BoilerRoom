import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import SetDetail from './SetDetail';

class SetList extends Component {
  state = { sets: [] };

  componentWillMount() {
    axios.get('https://api.myjson.com/bins/1fct1x')
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
      <ScrollView>
        {this.renderSets()}
      </ScrollView>
    );
  }
}

export default SetList;
