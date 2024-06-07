import { ReactNode } from "react";

export interface UrlProps {
    url: string,
    requiredAuth: boolean,
    element: ReactNode
}

export interface InputProps {
    name: string,
    placeholder: string,
    type: string
}