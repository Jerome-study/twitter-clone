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

export interface UserInfoProps {
    username: string,
    first_name : string,
    last_name : string
    email : string,
    id : string
}

export interface TweetProps {
    content : string,
    createdAt: Date,
    image : [string],
    updatedAt : Date,
    user_id : string,
    id : string
}