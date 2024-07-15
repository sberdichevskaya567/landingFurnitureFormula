import {IUseModalResult} from "../../../modal/modal-create-order/hook";

interface IModal {
    modal: IUseModalResult
}

interface IModalState {
    title?: string
}

export type { IModal, IModalState }