import styl from "../../assets/стул без фона.png";
import {Button} from "../../ui-kit/button-icon";
import {DetailBlockChair} from "../detail-block-chair";


const ChairPreviewBlock = () => {
    const titleMook = [
        'Детель1',
        'Детель2',
        'Детель3',
    ]
    return (
        <div>
            <div className="flex justify-start">
                <div>
                    <div className="flex gap-2 justify-around">
                        <img className="w-[270px] grayscale" src={styl}/>
                        <div className="flex ">
                            <div className="border-r-[1px] border-r-[#D30909]" />
                            <div className="content-center">
                                <DetailBlockChair title={titleMook[0]}/>
                                <DetailBlockChair title={titleMook[1]}/>
                                <DetailBlockChair title={titleMook[2]}/>
                            </div>
                        </div>
                    </div>
                    <div className="ml-6 mt-4">
                        <a href={'#block1'}>
                            <Button className="px-3 py-1 border-[#D30909] border-[1px]">
                                Модели стула &#8594;
                            </Button>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export { ChairPreviewBlock }