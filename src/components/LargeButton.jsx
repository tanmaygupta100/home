import React from 'react';
import customButton from './customButton.css';

const LargeButton = ({ label, colour, desc, onClick }) => {
    const buttonColour = (() => {
        switch (colour) {
            case 'yellow':
                return 'custom-button yellow';
            case 'blue':
                return 'custom-button blue';
            case 'grey':
            default:
                return 'custom-button grey';
        }
    })();

    return (
        <button className={`${buttonColour}`} onClick={onClick}>
            <div className='flex flex-col items-start lg:gap-y-10 gap-y-2 px-2'>
                <div className='lg:text-3xl font-bold text-xl'>
                    {label}
                </div>
                
                <div className='lg:text-xl lg:font-bold font-medium text-base'>
                    {desc}
                </div>

            </div>
        </button>
    );
};

export default LargeButton;