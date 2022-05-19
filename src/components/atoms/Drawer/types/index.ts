import { SxProps, Theme } from "@mui/material";
import { ReactNode } from "react";

export type PropsType = {
    anchor?: 'bottom' | 'left' | 'right' | 'top';
    children: ReactNode;
    classes?: Object;
    elevation?: number;
    hideBackdrop?: boolean;
    ModalProps?: Object;
    onClose?: () => {};
    open?: boolean;
    PaperProps?: Object;
    SlideProps?: Object;
    style?: SxProps<Theme>;
    transitionDuration?: number | { appear?: number, enter?: number, exit?: number }
    variant: 'permanent' | 'persistent' | 'temporary';
};