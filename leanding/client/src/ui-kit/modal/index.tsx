import React, {PropsWithChildren} from "react";
import {createPortal} from "react-dom";
import {IModal, IModalState} from "./interface";
import {Button} from "../button-icon";
import CrossIcon from "../../assets/cross-icon.tsx";

// const modalRootElement = document.getElementById('modal')

const Modal = ({
      children,
      modal,
      title
    }: PropsWithChildren & IModal & IModalState): JSX.Element => {



    return (
        <>
            {modal.isOpen && (
                <React.Fragment>
                    {createPortal(
                        <>
                            <div className='fixed w-full h-full top-0 z-10'>
                                <div
                                    onClick={modal.handleOnClose()}
                                    className='fixed z-40 inset-0 bg-gray-500 bg-opacity-75 transition-opacity'
                                />
                                <div
                                    className={`relative z-50 max-w-[520px] overflow-hidden bg-white text-left shadow-xl transition-all transform h-fit w-full modal-center max-[521px]:h-full`}
                                >
                                    <div className='max-h-[100vh] overflow-auto px-9 py-8  max-[521px]:px-4 max-[521px]:py-5'>
                                        <div
                                            className={`flex justify-between `}
                                        >
                                            <p
                                                className={`text-[34px] uppercase font-medium`}
                                            >
                                                {title}
                                            </p>
                                            <Button
                                                className='self-baseline'
                                                type='button'>
                                                <div onClick={modal.handleOnClose()}>
                                                    <CrossIcon />
                                                </div>

                                            </Button>
                                        </div>
                                        <form>
                                            {children}
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </>,
                        document.body
                    )}
                </React.Fragment>
            )}
        </>
    )
}

export default Modal