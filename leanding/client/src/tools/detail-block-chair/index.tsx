import img from "../../assets/image 18.png";
import {useModal} from "../../modal/modal-create-order/hook";
import {ModalProduct} from "../../modal/modal-prodict";

interface IDetailBlockChair {
    title: string
}
const DetailBlockChair = ({title}: IDetailBlockChair) => {

    const modalProduct = useModal()

    return (
        <>
            <ModalProduct modal={modalProduct} titleProduct={title}/>
            <div className="mb-4 cursor-pointer"  onClick={modalProduct.handleOnOpen()}>
                <h3 className="ml-[68px]">
                    {title}
                </h3>
                <div className="flex gap-2">
                    <div className="flex">
                        <div className="flex-col">
                            <div className="flex h-4 w-7 border-b-[1px] border-[#D30909]"/>
                            <div className="flex"/>
                        </div>
                        <div className="rounded-full w-3 h-3 bg-[#D30909] mt-[10px]"></div>
                        <img src={img} className="w-[16px] ml-1"/>
                    </div>
                    <p>текст текст текст</p>
                </div>
            </div>

        </>
    );
};

export { DetailBlockChair }