import React from 'react';

import getData from '../../api';
import HomeLayout from '../../components/layouts/HomeLayout';

import type { PropsType } from './types';

const HomePage = (props: PropsType) => {
    const { } = props;

    React.useEffect(() => {
        getData().then(function (response) {
            const { data } = response;
            const { articles } = data;
            console.log(articles);
        }).catch(function (error) {
            console.log(error);
        });
    }, []);

    return (
        <HomeLayout />
    );
};

export default HomePage;
