import { SxProps, Theme } from "@mui/material";
import { ElementType, ReactNode } from "react";

export type PropsType = {
    align?: 'center' | 'inherit' | 'justify' | 'left' | 'right';
    children?: ReactNode;
    classes?: Object;
    component?: ElementType;
    gutterBottom?: boolean;
    noWrap?: boolean;
    paragraph?: boolean;
    styles?: SxProps<Theme>;
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "caption" | "button" | "overline" | "inherit";
    variantMapping?: Object;
};
