import parta from '../../assets/парта без фона.png'
import {DetailBlockDesk} from "../detail-block-desk";

const DeskPreviewBlock = (): JSX.Element => {
    return (
        <div className="flex justify-end">
            <div className="flex justify-around">
                <div className="flex ">
                    <div className="content-center">
                        <DetailBlockDesk />
                        <DetailBlockDesk />
                        <DetailBlockDesk />
                    </div>
                    <div className="border-r-[1px] border-r-[#D30909]"/>
                </div>
                <img className="flex w-[300px]" src={parta}/>
            </div>
        </div>
    );
};

export {DeskPreviewBlock}