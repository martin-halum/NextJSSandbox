/**
 *
 * Auth Context
 * @format
 * @flow
 *
 */

import React, { useState } from 'react';
import getData from '../../api';

import type { PropsType } from './types';

export const ApplicationContext = React.createContext<{
  fetchArticles: () => void;
  article: Object;
  isFetching: boolean;
  setNextArticle: () => void;
  setPrevArticle: () => void;
}>({
  fetchArticles: () => { },
  article: null,
  isFetching: true,
  setNextArticle: () => { },
  setPrevArticle: () => { }
});

function ApplicationProvider(props: PropsType): React.ReactElement {
  const { children } = props;
  const [articles, setArticles] = useState(null);
  const [article, setArticle] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchArticles = () => {
    getData().then(function (response) {
      const { data } = response;
      const { articles } = data;

      setArticles(articles);
      setArticle(articles[currentIndex]);
      setIsFetching(false);

    }).catch(function (error) {
      console.log(error);
    });
  };

  const setNextArticle = () => {
    let newIndex = 0;
    const maxIndex = articles.length - 1;

    if (currentIndex < maxIndex) {
      newIndex = currentIndex + 1;
    } else {
      newIndex = 0;
    }

    setCurrentIndex(newIndex);
    setArticle(articles[newIndex]);
  }

  const setPrevArticle = () => {
    let newIndex = 0
    if (currentIndex > 0) {
      newIndex = currentIndex - 1;
    } else {
      newIndex = articles.length - 1;
    }

    setCurrentIndex(newIndex);
    setArticle(articles[newIndex]);

  }

  return (
    <ApplicationContext.Provider
      value={{
        fetchArticles,
        article,
        isFetching,
        setNextArticle,
        setPrevArticle
      }}>
      {children}
    </ApplicationContext.Provider>
  );
}

export default ApplicationProvider;
