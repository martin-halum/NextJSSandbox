import React from 'react';
import { Drawer as MuiDrawer } from '@mui/material';

import type { PropsType } from './types';

const Drawer = (props: PropsType) => {
    const {
        anchor,
        children,
        classes,
        elevation,
        hideBackdrop,
        ModalProps,
        onClose,
        open,
        PaperProps,
        SlideProps,
        style,
        transitionDuration,
        variant
    } = props;

    return (
        <MuiDrawer
            anchor={anchor}
            classes={classes}
            elevation={elevation}
            hideBackdrop={hideBackdrop}
            ModalProps={ModalProps}
            onClose={onClose}
            open={open}
            PaperProps={PaperProps}
            SlideProps={SlideProps}
            sx={style}
            transitionDuration={transitionDuration}
            variant={variant}
        >
            {children}
        </MuiDrawer>
    );
};

export default Drawer;
