import 'react-native';
import React from 'react';
import Button from '../src/components/Button';
import { Text, TouchableOpacity } from 'react-native';
import { shallow } from 'enzyme';

import renderer from 'react-test-renderer';

test('renders the Button component correctly', () => {
  const tree = renderer.create(
    <Button />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders one Text component', () => {
  const wrapper = shallow(<Button />);
  expect(wrapper.find(Text).length).toBe(1);
});

test('renders one TouchableOpacity component', () => {
  const wrapper = shallow(<Button />);
  expect(wrapper.find(TouchableOpacity).length).toBe(1);
});
