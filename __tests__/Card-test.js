import 'react-native';
import React from 'react';
import Card from '../src/components/Card';
import { View } from 'react-native';
import { shallow } from 'enzyme';

import renderer from 'react-test-renderer';

test('renders the Card component correctly', () => {
  const tree = renderer.create(
    <Card />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders one View component', () => {
  const wrapper = shallow(<Card />);
  expect(wrapper.find(View).length).toBe(1);
});
