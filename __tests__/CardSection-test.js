import 'react-native';
import React from 'react';
import CardSection from '../src/components/CardSection';
import { View } from 'react-native';
import { shallow } from 'enzyme';

import renderer from 'react-test-renderer';

test('renders the CardSection component correctly', () => {
  const tree = renderer.create(
    <CardSection />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders one View component', () => {
  const wrapper = shallow(<CardSection />);
  expect(wrapper.find(View).length).toBe(1);
});
