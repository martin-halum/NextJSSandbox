import React from 'react';
import renderer from 'react-test-renderer';

import ElevationScroll from '../ElevationScroll';

describe('ElevationScroll Test', ()=>{
  test('ElevationScroll', () => {
    const tree = renderer
      .create(
        <ElevationScroll />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})
