import './index.css';
import './style.css'
import {Header} from "./tools/header";
import {ChairPreviewBlock} from "./tools/chair-preview-block";
import {Footer} from "./tools/footer";
import {DeskPreviewBlock} from "./tools/desk-preview-block";
import useGetProduvtPresenter from "../presenter";

import Chair from "./assets/стул без фона.png"
import Desk from "./assets/парта без фона.png"
import Detail from "./assets/image 18.png"
import {dataChair} from "./mook-data";
import {Button} from "./ui-kit/button-icon";
import React, {useState} from "react";
import {ModalProduct} from "./modal/modal-prodict";
import {useModal} from "./modal/modal-create-order/hook";

const App = () => {

    const [state, setState] = useState(0)
    const handleState = () => {
        setState(state+1)
    }

    // const {data} = useGetProduvtPresenter()
    // console.log(data)
    const modalProduct = useModal()


    return (
        <div className="min-h-[100vh] bg-[#E7E2D9] text-2xl ">
            <ModalProduct modal={modalProduct} titleProduct={''}/>
            <Header/>
            {/*// первый блок*/}
            <div className="max-w-[1300px] mx-auto">
                <div className="flex flex-col mt-[50px] gap-[30px] max-w-[1300px]">
                    <div className="flex gap-[50px]">
                        <div
                            className="w-[300px] h-[350px] px-[40px] py-[20px] border-white border-[1px]">
                            <img className="w-[200px] h-auto" src={Chair}/>
                        </div>
                        <div>
                            <ol className="flex flex-col gap-[12px]">
                                <li className="flex gap-4">
                                    <div>◦</div>
                                    <p>Спинка стула имеет анатомически правильную форму и позволяет сохранить осанку
                                        ученика</p>
                                </li>
                                <li className="flex gap-4">
                                    <div>◦</div>
                                    <p>Выжим сиденья с плавным передним краем позволяют ученикам занять комфортное положение
                                        во время урока</p>
                                </li>
                                <li className="flex gap-4">
                                    <div>◦</div>
                                    <p>Заглушки нижних опор дополнительно фиксируются к каркасу для большей надёжности</p>
                                </li>
                                <li className="flex gap-4">
                                    <div>◦</div>
                                    <p>Ступенчатая регулировка по высоте сиденья и спинки позволяет легко подстроить под
                                        нужную ростовую группу</p>
                                </li>
                                <li className="flex gap-4">
                                    <div>◦</div>
                                    <p>Стулья легко стопируются для оптимизации пространства в классе</p>
                                </li>
                                <li className="flex mx-[24px] mt-[10px] justify-end">
                                    <a
                                        className="w-[370px] px-4 py-2 border-white border-[1px]"
                                        href='#complectCchair'
                                    >
                                        Посмотреть комплектующие для стула
                                    </a>
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div className="flex gap-[30px] mt-[50px]">
                        <div>
                            <ol className="flex flex-col gap-[12px]">
                                <li className="flex gap-4">
                                    <div>◦</div>
                                    <p>Регулировка опор стола позволяют компенсировать неровности пола</p>
                                </li>
                                <li className="flex gap-4">
                                    <div>◦</div>
                                    <p>3-х ступенчатая регулировка по высоте позволяет подстроить
                                        под нужную ростовую группу</p>
                                </li>
                                <li className="flex gap-4">
                                    <div>◦</div>
                                    <p>Лоток из полиуретана надежно соединен со столешницей и герметичен. Его можно использовать для хранения канцелярии
                                    </p>
                                </li>
                                <li className="flex gap-4">
                                    <div>◦</div>
                                    <p>Двойной крепкий крючок со скруглением выдержит даже самый тяжёлый школьный ранец и не даст ему перевернуться.
                                        Теперь никто не запнётся о лежащий портфель
                                    </p>
                                </li>
                                <li className="flex gap-4">
                                    <div>◦</div>
                                    <p>Стулья легко стопируются для оптимизации пространства в классе</p>
                                </li>
                                <li className="flex justify-end">
                                    <Button className="w-[370px] px-4 py-2 border-white border-[1px]">
                                        Посмотреть комплектующие для парты
                                    </Button>
                                </li>
                            </ol>
                        </div>
                        <div className="w-[300px] h-[350px] px-[10px] py-[20px] border-white border-[1px]">
                            <img className="w-full" src={Desk}></img>
                        </div>
                    </div>
                </div>

                {/*блок 2*/}

                <div className="mx-auto">
                    <p className="mt-[50px] mb-[15px] font-semibold ml-[20px]" >Подобрать варинт стула подходящий для вас</p>
                    <div className="grid grid-cols-3 gap-[30px] mt-[30px]">
                        {
                            dataChair.slice(0, 3 * (state + 1)).map((el) => {
                                return (
                                    <div className="grid mx-auto w-[300px] h-[350px] border-white border-[1px]">
                                        <div className="relative w-fit mx-auto">
                                            <div>
                                                {el}
                                            </div>
                                            <Button
                                                className="absolute border-white border-[1px] px-4 py-2 bottom-[10px]"
                                                onClick={modalProduct.handleOnOpen()}
                                            >
                                                Подробнее
                                            </Button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    {((state + 1) * 3) <= dataChair.length ?
                        <Button
                            className="flex mx-auto mt-[22px]"
                            onClick={handleState}
                        >
                            Показать больше
                        </Button>
                        :
                        <Button
                            className="flex mx-auto mt-[22px]"
                            onClick={()=>{setState(0)}}
                        >
                            Скрыть
                        </Button>
                    }
                    <div className="mt-[50px] flex flex-col mx-auto gap-[20px]">
                        <div className="flex mx-auto w-fit">
                            Если вам нужен стул, модель которого не представлена на сайте,
                            можете оставить нам свой запрос
                        </div>
                        <div className="flex w-[70%] h-[450px] border-white border-[1px] mx-auto">
                            <div>
                                Оставьте свои контакты и мы обязательно свяжемся с вами в кратчайшие сроки
                            </div>
                        </div>
                    </div>
                </div>


                <div>
                    <p>Подобрать варинт парты подходящий для вас</p>
                </div>



                {/*блок 2*/}
                <div
                    id='complectCchair'
                     className="flex gap-[50px] justify-center mt-[70px]"
                >
                    <div className="border-[1px] border-black px-[64px] py-[64px]">
                        <img src={Detail} className="w-[70px]"/>
                    </div>
                    <div className="border-[1px] border-black px-[64px] py-[64px]">
                        <img src={Detail} className="w-[70px]"/>
                    </div>
                    <div className="border-[1px] border-black px-[64px] py-[64px]">
                        <img src={Detail} className="w-[70px]"/>
                    </div>
                    <div className="border-[1px] border-black px-[64px] py-[64px]">
                        <img src={Detail} className="w-[70px]"/>
                    </div>
                    <div className="border-[1px] border-black px-[64px] py-[64px]">
                        <img src={Detail} className="w-[70px]"/>
                    </div>
                </div>
                {/*<div className="grow max-w-[1300px] w-[100%] m-auto">*/}

                {/*    <div className="flex mt-8 min-w-[1300px]:justify-between">*/}
                {/*        <ChairPreviewBlock/>*/}

                {/*        <DeskPreviewBlock/>*/}

                {/*/!*нижний блок*!/*/}
                {/*<div>*/}
                {/*    <div id={'block1'} className="w-[90%] border-[1px] flex flex-row flex-nowrap overflow-x-auto gap-3">*/}
                {/*        <img className="w-[200px]" src={styl} onClick={modalProduct.handleOnOpen()}/>*/}
                {/*        <img className="w-[200px]" src={styl1} onClick={modalProduct.handleOnOpen()}/>*/}
                {/*        <img className="w-[200px]" src={styl2} onClick={modalProduct.handleOnOpen()}/>*/}
                {/*        <img className="w-[200px]" src={styl} onClick={modalProduct.handleOnOpen()}/>*/}
                {/*        <img className="w-[200px]" src={styl1} onClick={modalProduct.handleOnOpen()}/>*/}
                {/*        <img className="w-[200px]" src={styl2} onClick={modalProduct.handleOnOpen()}/>*/}
                {/*        <img className="w-[200px]" src={styl} onClick={modalProduct.handleOnOpen()}/>*/}
                {/*        <img className="w-[200px]" src={styl1} onClick={modalProduct.handleOnOpen()}/>*/}
                {/*        <img className="w-[200px]" src={styl2} onClick={modalProduct.handleOnOpen()}/>*/}
                {/*    </div>*/}
                {/*</div>*/}


                {/*/!*блок парты*!/*/}
                {/*<div className="mt-12">*/}
                {/*    <div id={'block1'} className="w-[90%] border-[1px] flex flex-row flex-nowrap overflow-x-auto gap-3">*/}
                {/*        <img className="w-[200px]" src={styl} onClick={modalProduct.handleOnOpen()}/>*/}
                {/*        <img className="w-[200px]" src={styl1} onClick={modalProduct.handleOnOpen()}/>*/}
                {/*        <img className="w-[200px]" src={styl2} onClick={modalProduct.handleOnOpen()}/>*/}
                {/*        <img className="w-[200px]" src={styl} onClick={modalProduct.handleOnOpen()}/>*/}
                {/*        <img className="w-[200px]" src={styl1} onClick={modalProduct.handleOnOpen()}/>*/}
                {/*        <img className="w-[200px]" src={styl2} onClick={modalProduct.handleOnOpen()}/>*/}
                {/*        <img className="w-[200px]" src={styl} onClick={modalProduct.handleOnOpen()}/>*/}
                {/*        <img className="w-[200px]" src={styl1} onClick={modalProduct.handleOnOpen()}/>*/}
                {/*        <img className="w-[200px]" src={styl2} onClick={modalProduct.handleOnOpen()}/>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div className="mt-[100px]">*/}
                {/*    /!*<div>блок выведен с бд*!/*/}
                {/*    /!*    {*!/*/}
                {/*    /!*        data.map((el)=>{*!/*/}
                {/*    /!*            return (*!/*/}
                {/*    /!*                <div className="flex flex-col">*!/*/}
                {/*    /!*                    <div>{el.name}</div>*!/*/}
                {/*    /!*                    <div>{el.description}</div>*!/*/}
                {/*    /!*                </div>*!/*/}
                {/*    /!*            )*!/*/}
                {/*    /!*        })*!/*/}
                {/*    /!*    }*!/*/}
                {/*    /!*</div>*!/*/}
                {/*</div>*/}

                {/*</div>*/}
                <Footer/>
            </div>
        </div>
    )
}

export default App
