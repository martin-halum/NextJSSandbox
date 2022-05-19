import React from 'react';
import renderer from 'react-test-renderer';

import Text from '../Text';

describe('Text Test', () => {
  test('renders the Text String', () => {
    const tree = renderer
      .create(
        <Text>Test</Text>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
})