import {ButtonHTMLAttributes, DetailedHTMLProps, PropsWithChildren} from "react";

type IButton =
    DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
    & PropsWithChildren

export type {
    IButton
}