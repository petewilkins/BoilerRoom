import 'react-native';
import React from 'react';
import Header from '../src/components/Header';

import renderer from 'react-test-renderer';

test('renders the Header component correctly', () => {
  const tree = renderer.create(
    <Header />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
