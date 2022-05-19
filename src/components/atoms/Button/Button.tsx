import React from 'react';
import { Button as MuiButton } from '@mui/material';

import type { PropsType } from './types';

const Button = (props: PropsType) => {
    const {
        children,
        classes,
        color,
        component,
        disabled,
        disableElevation,
        disableFocusRipple,
        disableRipple,
        endIcon,
        fullWidth,
        href,
        onClick,
        size,
        startIcon,
        style,
        variant
    } = props;

    return (
        <MuiButton
            classes={classes}
            color={color}
            component={component}
            disabled={disabled}
            disableElevation={disableElevation}
            disableFocusRipple={disableFocusRipple}
            disableRipple={disableRipple}
            endIcon={endIcon}
            fullWidth={fullWidth}
            href={href}
            onClick={onClick}
            size={size}
            startIcon={startIcon}
            sx={style}
            variant={variant}
        >
            {children}
        </MuiButton>
    );
};

export default Button;
