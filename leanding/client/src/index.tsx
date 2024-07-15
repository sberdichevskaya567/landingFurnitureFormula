import './style.css'
import {ReactNode, useEffect, useRef} from "react";
interface ICarousel {
    active: boolean
    setActive(active: boolean): void
    children: ReactNode
}
const Carousel = ({active, setActive, children}: ICarousel) => {

    const modalRef = useRef(null)

    const handleOnClick = () => {
        setActive(false)
    }

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setActive(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={active ? 'flex overflow-y-hidden': 'hidden'}>
            <div className="absolute left-0 top-0 w-full h-full bg-black/[0.7] flex justify-center items-center">
                {/*<div className="absolute border-[1px] border-black mx-auto bg-gray-300 w-[700px] h-[500px]">*/}
                <div ref={modalRef} className="w-[500px] h-[400px] rounded-[30px] text-center my-auto bg-[#F0F0F3]">
                    <div className="flex justify-end m-4 cursor-pointer" onClick={handleOnClick}>x</div>
                    <div className="boxShadow w-[250px] h-[250px] bg-[#F0F0F3] mx-auto rounded-[20px]">
                        {children}
                    </div>
                    <div className="flex justify-around mt-8">
                        <div className="boxShadow cursor-pointer">туда</div>
                        <div className="boxShadow cursor-pointer">сюда</div>
                    </div>
                </div>
                    {/*<div className="flex mt-[50px]">*/}
                    {/*    <div className="ml-[50px] border-[1px] border-black my-auto w-[50px] h-[50px]"></div>*/}
                    {/*    <div className="border-[1px] border-black mx-auto w-[300px] h-[300px]"></div>*/}
                    {/*    <div className="mr-[50px] border-[1px] border-black my-auto w-[50px] h-[50px]"></div>*/}
                    {/*</div>*/}
                    {/*<div className="flex mt-[20px] justify-center"> цвета </div>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

export { Carousel }