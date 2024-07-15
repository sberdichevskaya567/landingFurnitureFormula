import Modal from "../../ui-kit/modal";
import {IModal} from "../../ui-kit/modal/interface";
import {ProductCard} from "./tools/product-card";
import Input from "../../ui-kit/input";
import {Button} from "../../ui-kit/button-icon";

const CreateOrderModal = ({
    modal
    }: IModal) => {

    return (
        <Modal
            modal={modal}
            title="Оформление товара"
        >
            <div className="flex justify-between">
                <div className="flex-col">
                    <div className="flex justify-between">
                        <div className="">
                            <h2 className="flex">Товары</h2>
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />

                        </div>
                        <div className="flex border-black border-r-[1px]"/>
                    </div>
                </div>
                <div className="flex-col">
                    <h2 className="flex">Оформление заказа</h2>
                    <div className="flex flex-col">
                        <Input
                            label='Заказчик'
                            placeholder='Введите имя/организацию'
                        />
                        <Input
                            label='Email'
                            placeholder='Введите ваш emal'
                            req
                        />
                        <Input
                            label='Телефон'
                            placeholder='Введите ваш номер телефона'
                            req
                        />
                        <Input
                            label='Адрес'
                            placeholder='Введите ваш адрес'
                        />
                    </div>
                    <Button
                        className="px-2 py-1 bg-emerald-700 text-white mt-2"
                    >
                        Оформить заказ
                    </Button>

                </div>
            </div>
        </Modal>

    )
}

export default CreateOrderModal