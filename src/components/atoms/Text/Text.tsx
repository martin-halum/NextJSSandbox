import React from 'react';
import { Typography } from '@mui/material';

import type { PropsType } from './types';

const Text = (props: PropsType) => {
    const {
        align,
        children,
        classes,
        component,
        gutterBottom,
        noWrap,
        paragraph,
        styles,
        variant,
        variantMapping
    } = props;

    return (
        <Typography
            align={align}
            classes={classes}
            component={component}
            gutterBottom={gutterBottom}
            noWrap={noWrap}
            paragraph={paragraph}
            sx={styles}
            variant={variant}
            variantMapping={variantMapping}
        >
            {children}
        </Typography>
    );
};


export default Text;
