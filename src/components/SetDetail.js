import React from 'react';
import { Text } from 'react-native';
import Card from './Card';

const SetDetail = (props) => {
  return (
    <Card>
      <Text>{props.set.title}</Text>
    </Card>
  );
};

export default SetDetail;
