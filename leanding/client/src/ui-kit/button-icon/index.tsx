import {IButton} from "./interface";

const Button = ({
    children,
    ...props
}: IButton) => {
    return (
        <button className={props.className}
            onClick={props.onClick}>
            {children}
        </button>
    )
}

export {Button}