import React from 'react';
import renderer from 'react-test-renderer';

import HeaderItem from '../HeaderItem';

describe('HeaderItem Test', ()=>{
  test('HeaderItem', () => {
    const tree = renderer
      .create(
        <HeaderItem />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})
