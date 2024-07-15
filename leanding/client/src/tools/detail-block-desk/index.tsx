import img from "../../assets/image 18.png";
import {ModalProduct} from "../../modal/modal-prodict";
import {useModal} from "../../modal/modal-create-order/hook";

const DetailBlockDesk = () => {
    const modalProduct = useModal()
    return (
        <>
            <ModalProduct modal={modalProduct}/>
            <div className="mb-4 cursor-pointer" onClick={modalProduct.handleOnOpen()}>
                <h3 className="ml-7">
                    Название
                </h3>
                <div className="flex gap-2">
                    <img src={img} className="w-[16px] ml-1"/>
                    <div className="flex">
                        <p>текст текст текст</p>
                        <div className="rounded-full w-3 h-3 bg-[#D30909] mt-[10px] ml-1" />
                        <div className="flex-col">
                            <div className="flex h-4 w-7 border-b-[1px] border-[#D30909]"/>
                            <div className="flex"/>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export { DetailBlockDesk }