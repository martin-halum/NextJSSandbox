import React from "react";

export type PropsType = {
    window?: () => Window;
    children: React.ReactElement;
};