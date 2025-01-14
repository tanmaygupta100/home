import React from 'react';
import customButton from './customButton.css';

const SectionButton = ({ label, icon, onClick }) => {

    return (
        <button className={'custom-button blue w-fit'} onClick={onClick}>
            <div className='flex flex-col items-start'>
                <div className='lg:text-3xl font-bold text-xl flex items-center justify-between w-full px-2 gap-x-10'>
                    {label}
                    {icon && <i className={`${icon}`}></i>}
                </div>
            </div>
        </button>
    );
};

export default SectionButton;