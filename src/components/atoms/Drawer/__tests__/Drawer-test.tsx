import React from 'react';
import renderer from 'react-test-renderer';

import Drawer from '../Drawer';

describe('Drawer Test', ()=>{
  test('Drawer', () => {
    const tree = renderer
      .create(
        <Drawer />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})
