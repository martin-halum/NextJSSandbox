import { AppBar, Container, Toolbar } from '@mui/material';
import React from 'react';
import renderer from 'react-test-renderer';
import HeaderItem from '../../../molecules/HeaderItem';

import ElevationScroll from '../ElevationScroll';

describe('ElevationScroll Test', () => {
  test('ElevationScroll', () => {
    const tree = renderer
      .create(
        <ElevationScroll>
          <AppBar position="fixed" color='transparent'>
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                <HeaderItem title="Test" pages={[]} />
              </Toolbar>
            </Container>
          </AppBar>
        </ElevationScroll>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})
