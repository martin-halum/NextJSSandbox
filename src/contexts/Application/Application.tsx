/**
 *
 * Auth Context
 * @format
 * @flow
 *
 */

import React, { useState } from 'react';

import type { PropsType } from './types';

export const ApplicationContext = React.createContext<{
  showActivityIndicator: boolean;
  setShowActivityIndicator: (value: boolean) => void;
  currentRouteName: string;
  setCurrentRouteName: (routeName: string) => void;
  searchButtonHandler: () => void;
}>({});

function ApplicationProvider(props: PropsType): React.ReactElement {
  const { children } = props;
  const [showActivityIndicator, setShowActivityIndicator] = useState(false);
  const [currentRouteName, setCurrentRouteName] = useState('');
  const [selected, setSelected] = useState('');

  const searchButtonHandler = () => {
    console.log('Pressed');
  };

  return (
    <ApplicationContext.Provider
      value={{
        showActivityIndicator,
        setShowActivityIndicator,
        currentRouteName,
        setCurrentRouteName,
        selected,
        setSelected,
        searchButtonHandler,
      }}>
      {children}
    </ApplicationContext.Provider>
  );
}

export default ApplicationProvider;
