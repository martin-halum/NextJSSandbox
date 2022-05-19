import { SxProps, Theme } from "@mui/material";
import { ElementType, ReactNode, } from "react";

export type PropsType = {
    children: ReactNode;
    classes?: Object;
    color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
    component?: ElementType;
    disabled?: boolean;
    disableElevation?: boolean;
    disableFocusRipple?: boolean;
    disableRipple?: boolean;
    endIcon?: ReactNode;
    fullWidth?: boolean;
    href?: string;
    onClick?: () => {},
    size?: 'small' | 'medium' | 'large',
    startIcon?: ReactNode;
    style?: SxProps<Theme>;
    variant?: 'contained' | 'outlined' | 'text'
};