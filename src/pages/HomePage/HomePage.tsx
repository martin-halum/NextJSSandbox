/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from 'react';

import { ApplicationContext } from '../../contexts/Application';

import HomeLayout from '../../components/layouts/HomeLayout';

const HomePage = () => {
    const {
        fetchArticles,
        article,
        isFetching,
        setNextArticle,
        setPrevArticle
    } = useContext(ApplicationContext);

    React.useEffect(() => {
        fetchArticles();
    }, []);

    return (
        <>
            {!isFetching &&
                <HomeLayout
                    article={article}
                    onClickNext={setNextArticle}
                    onClickPrevious={setPrevArticle}
                />}
        </>
    );
};

export default HomePage;
