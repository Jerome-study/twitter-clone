import { ReactNode } from "react";

export interface UrlProps {
    url: string,
    AuthLayout: boolean,
    element: ReactNode
}

export interface InputProps {
    name: string,
    placeholder: string,
    type: string
}