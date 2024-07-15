import {IBaseInput} from "../common/interface";

interface IId {
    id: string
}
const Label = ({
    id,
    label,
    req,
    errorText
}: IBaseInput & IId): JSX.Element => {

    return (
        <>
            {label && (
                <>
                    <label
                        htmlFor={id}
                        className={`w-full block ${errorText && 'text-red-600'} cursor-pointer`}
                    >
                        {label} {req && <span className='text-red-500'>*</span>}
                    </label>
                </>
            )}
        </>
    )
}

export default Label