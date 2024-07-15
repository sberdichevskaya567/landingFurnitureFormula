import ModalCreateOrder from "../../modal/modal-create-order";
import {Button} from "../../ui-kit/button-icon";
import basket from "../../assets/Basket.png";
import {useModal} from "../../modal/modal-create-order/hook";

const Header = () => {
    const modalCreateOrder = useModal()
    return (
        <>
            <ModalCreateOrder modal={modalCreateOrder}/>

            <div className="w-full h-[70px] py-[20px] border-b-[1px] border-white">
                <div className="flex mx-auto justify-between max-w-[1300px]">
                    <div>Logo</div>
                    <Button>
                        <img src={basket} className="flex w-[30px]" onClick={modalCreateOrder.handleOnOpen()}/>
                    </Button>
                </div>
            </div>

        </>
    );
};

export {Header}