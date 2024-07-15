import {FieldError} from "react-hook-form";

interface IBaseInput {
    req?: boolean
    errorText?: FieldError
    label?: JSX.Element | string
    divClassName?: string
}

export type { IBaseInput }
