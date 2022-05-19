import React from 'react';
import renderer from 'react-test-renderer';

import HomeLayout from '../HomeLayout';

describe('HomeLayout Test', ()=>{
  test('HomeLayout', () => {
    const tree = renderer
      .create(
        <HomeLayout />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})
