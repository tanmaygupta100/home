import { useState } from "react";
import CustomButton from "./CustomButton";
import customButton from './customButton.css';

const EmptyPanel = ({ title, year, subtitle, image = [], desc = [] }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex( (prevIndex) =>
            prevIndex === 0 ? image.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex( (prevIndex) =>
            prevIndex === image.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Splits descriptions by newline characters to allow breaks:
    const descriptionLines = desc[currentIndex]?.split('\n');


    return (
        <div
            className="py-5 px-5 flex flex-col"
            style={{background:'#FFF1D8', border:'3px solid black', borderRadius:'20px'}}
        >
            <div
                className="text-start font-bold text-xl lg:text-2xl"
                style={{
                    wordWrap: 'break-word',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: 'flex',       // Enable flexbox
                    justifyContent: 'space-between',  // Add space between title and year
                }}
            >
                <span>{title}</span>     {/* Wrap the title in a span */}
                <span>{year}</span>      {/* Wrap the year in a span */}
            </div>
            <div
                className="text-start font-base text-lg lg:text-xl"
                style={{ wordWrap: 'break-word', overflow: 'hidden', textOverflow: 'ellipsis' }}
            >
                {subtitle}
            </div>
            <div className="mt-5 flex flex-col lg:flex-row items-center justify-between">
                <button
                    onClick={handlePrev}
                    className="custom-button yellow pi pi-chevron-left items-center lg:mr-5 lg:mb-0 mb-5"
                    style={{padding:"15px"}}
                />
                <img
                    src={image[currentIndex]}
                    alt={`Image ${currentIndex + 1}`}
                    draggable="false" // Dusavkes draggubg,
                    onContextMenu={(e) => e.preventDefault()} // Disables right-click
                    className="w-full lg:w-3/4"
                    style={{
                        maxHeight: "350px",
                        objectFit: "contain",   // Make sure it fits inside the container without distortion
                    }}
                />
                <button
                    onClick={handleNext}
                    className="custom-button yellow pi pi-chevron-right items-center lg:ml-5 lg:mt-0 mt-5"
                    style={{padding:"15px"}}
                />
            </div>
            <div
                className="mt-5 lg:text-lg text-base"
                style={{
                    height: 'auto',
                    overflowY: 'auto', // Vertical scrolling for overflow.
                    wordWrap: 'break-word', // Breaks long words.
                    textOverflow: 'ellipsis', // Adds ellipsis for overflowing text.
                }}
            >
                {descriptionLines?.map((line, index) => (
                    <p key={index}>{line}</p>
                ))}
            </div>
        </div>
    );
};

export default EmptyPanel;