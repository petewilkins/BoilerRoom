import 'react-native';
import React from 'react';
import CardSection from '../src/components/CardSection';

import renderer from 'react-test-renderer';

test('renders the CardSection component correctly', () => {
  const tree = renderer.create(
    <CardSection />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
