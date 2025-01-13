import React from 'react';
import customButton from './customButton.css';

const LargeButton = ({ label, colour, desc, hasWave, onClick }) => {
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

    const waveClass = hasWave ? 'wave' : ''; // Conditionally add wave class.

    return (
        <button className={`${buttonColour} ${waveClass}`} onClick={onClick}>
            <div className='flex items-center gap-x-3'>
                {label}<br/>
                {desc}
            </div>
        </button>
    );
};

export default LargeButton;