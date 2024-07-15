import Modal from "../../ui-kit/modal";
import strelka from "../../assets/strelka.png"

import styl1 from "../../assets/стул 1.jpg"
import styl2 from "../../assets/стул 2.jpg"
import {useState} from "react";
import {Button} from "../../ui-kit/button-icon";
import {useRandomId} from "../../hooks/random-id-hook";
import {IUseModalResult} from "../modal-create-order/hook";

interface IModalProdict {
    titleProduct: string
    modal: IUseModalResult
}

const ModalProduct = ({titleProduct, modal}: IModalProdict) => {

    const masImg = [ styl1, styl2 ]

    const [index, setIndex] = useState(0)

    const {id} = useRandomId()
    const [cart, setCart] = useState({
        'id': id,
        'nameProduct': titleProduct,
        'quantity': 0
    })
    const addTrash = () => {
        setCart({...cart, quantity: cart.quantity + 1})
        return cart
    }

    console.log(cart.quantity)

    return (
        <Modal modal={modal} title={titleProduct}>
            <div className="mt-7">
                <div className="flex items-center justify-center gap-4">
                    <div className="" onClick={()=>{
                       setIndex(index>0 ? index - 1 : index)
                    }}>
                        <img className="w-[24px]" src={strelka}></img>
                    </div>
                    <div className="w-[250px] h-[300px] border-[1px] borde-black ">
                        <img src={masImg[index]}/>
                    </div>
                    <div className="" onClick={()=>{
                        setIndex(index<masImg.length-1 ? index + 1 : index)
                    }}>
                        <img src={strelka} className="w-[24px] rotate-180"></img>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <h2>Описание</h2>
                <p className="mt-2">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
            <Button
                className="items-center mt-4"
                onClick={addTrash}
            >
                Добавить в корзину
            </Button>
        </Modal>
    )
}

export { ModalProduct }