import { ReactNode } from "react";

export interface UrlProps {
    url: string,
    element: ReactNode,
    requiredAuth: boolean
}

export interface InputProps {
    name: string,
    placeholder: string,
    type: string
}