import 'react-native';
import React from 'react';
import Button from '../src/components/Button';

import renderer from 'react-test-renderer';

test('renders the Button component correctly', () => {
  const tree = renderer.create(
    <Button />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
