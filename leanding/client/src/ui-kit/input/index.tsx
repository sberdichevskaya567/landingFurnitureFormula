import {useRandomId} from "../common/functions";
import {InputHTMLAttributes} from "react";
import {IBaseInput} from "../common/interface";
import Label from "../label/input.tsx";

const Input = ({
    label,
    req,
    errorText,
    divClassName,
    ...props
    }: InputHTMLAttributes<HTMLInputElement> & IBaseInput) => {

    const { id } = useRandomId()

    return (
        <div className={`relative mt-2 ${divClassName}`}>
            <Label
                id={id}
                label={label}
                errorText={errorText}
                req={req}
            />
            <input
                id={id}
                className={`w-full border outline-neutral-none ${errorText
                ? 'border-red-600'
                :'border-neutral-900'
                } text-sm block px-2 py-1`}
                type={'text'}
                {...props}
            />
            {errorText && (
               <p className="mt-1 text-xs text-red-600 absolute">
                   {errorText.message}
               </p>
            )}
        </div>
    );
};

export default Input;