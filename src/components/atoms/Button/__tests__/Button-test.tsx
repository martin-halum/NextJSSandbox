import React from 'react';
import renderer from 'react-test-renderer';

import Button from '../Button';

describe('Button Test', () => {
  test('Button', () => {
    const tree = renderer
      .create(
        <Button>Test Button</Button>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})
