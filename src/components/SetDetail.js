import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const SetDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <Text>{props.set.title}</Text>
      </CardSection>
    </Card>
  );
};

export default SetDetail;
