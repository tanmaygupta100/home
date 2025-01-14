import CustomButton from "./CustomButton";
import customButton from './customButton.css';

const EmptyPanel = ({ title, subtitle, desc }) => {
    return (
        <div
            className="py-5 px-10 flex flex-col"
            style={{background:'#FFF1D8', border:'3px solid black', borderRadius:'20px'}}
        >
            <div className="text-start font-bold text-xl lg:text-2xl">
                {title}
            </div>
            <div className="text-start font-base text-lg lg:text-xl">
                {subtitle}
            </div>
            <div className="mt-5 flex flex-row items-center justify-between gap-x-4">
                <button
                    className="custom-button yellow pi pi-chevron-left items-center px-5"
                    style={{padding:"15px"}}
                ></button>
                body
                <button
                    className="custom-button yellow pi pi-chevron-right items-center px-5"
                    style={{padding:"15px"}}
                ></button>
            </div>
        </div>
    );
};

export default EmptyPanel;