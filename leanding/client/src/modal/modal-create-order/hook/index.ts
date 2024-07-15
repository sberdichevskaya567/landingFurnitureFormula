import {useState} from "react";

type ModalEventHandler = (callback?: () => void) => () => void
interface IUseModalResult {
    isOpen: boolean
    handleOnOpen: ModalEventHandler
    handleOnClose: ModalEventHandler
}

const useModal = (): IUseModalResult => {
    const [isOpen, setIsOpen] = useState(false)

    const handleOnOpen: ModalEventHandler = (callback) => () => {
        setIsOpen(true)
        if (callback !== undefined) callback()
    }
    const handleOnClose: ModalEventHandler = (callback) => () => {
        setIsOpen(false)
        if (callback !== undefined) callback()
    }

    return { isOpen, handleOnOpen, handleOnClose }
}

export type { IUseModalResult }
export {useModal}