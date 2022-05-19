import React from 'react';
import renderer from 'react-test-renderer';

import Header from '../Header';

describe('Header Test', ()=>{
  test('Header', () => {
    const tree = renderer
      .create(
        <Header />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})
