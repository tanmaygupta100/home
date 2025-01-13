import React from 'react';
import customButton from './customButton.css';

const CustomButton = ({ label, colour, icon, onClick }) => {
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
            <div className='flex items-center gap-x-3'>
                {icon && <i className={`${icon}`}></i>}
                {label}
            </div>
        </button>
    );
};

export default CustomButton;