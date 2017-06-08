import 'react-native';
import React from 'react';
import Header from '../src/components/Header';
import { View, Text } from 'react-native';
import { shallow } from 'enzyme';

import renderer from 'react-test-renderer';

test('renders the Header component correctly', () => {
  const tree = renderer.create(
    <Header />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders one View component', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find(View).length).toBe(1);
});

test('renders one Text component', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find(Text).length).toBe(1);
});
