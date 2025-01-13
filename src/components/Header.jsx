import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import 'primeicons/primeicons.css';
import CustomButton from './CustomButton';


const Header = () => {
    const location = useLocation(); // Avoids needing to pass current path to App.js.
    const [aboutModal, setAboutModal] = useState(false); // Controls visibility of PrimeReact model.
    const [contactModal, setContactModal] = useState(false);


    const getButtons = () => {
        switch(location.pathname) {
            case '/':
                return [
                    { to: '#', label: 'About', onClick: () => setAboutModal(true), colour: 'grey' },
                    { to: '#', label: 'Contact', onClick: () => setContactModal(true), colour: 'grey' },
                ];
            case '/skills':
                return [
                    { to: '/projects', label: 'Projects', icon: 'pi pi-wrench', colour: 'yellow' },
                    { to: '/', label: 'Home', colour: 'grey' },
                ];
            case '/projects':
                return [
                    { to: '/skills', label: 'Skills', icon: 'pi pi-graduation-cap', colour: 'blue' },
                    { to: '/', label: 'Home', icon: 'pi pi-home', colour: 'grey' },
                ];
            default:
                return [];
        }
    };
    const buttons = getButtons();



    return (
        <header className='flex justify-between p-10 py-7 w-full items-center border-b-4 border-black' style={{background:'#A2D8B4'}}>
            <div className='flex flex-row gap-x-5 items-center'>
                <h1 className="text-right font-extrabold text-xl sm:text-2xl lg:text-4xl">
                    TANMAY<br/>GUPTA
                </h1>
                <div className="w-[5px] bg-black self-stretch rounded-lg"></div>
                <h1 className="text-right font-bold text-sm sm:text-xl lg:text-2xl">
                    software<br/>engineer
                </h1>
            </div>
            <div>
                <nav className="flex flex-row gap-4">
                {buttons.map((btn, index) => (
                    <Link key={index} to={btn.to}>
                    <CustomButton
                        label={btn.label}
                        icon={btn.icon}
                        colour={btn.colour}
                        onClick={btn.onClick}
                        hasWave={true}
                    />
                    </Link>
                ))}
                </nav>
            </div>

            {/* ABOUT modal: */}
            <Dialog header="About Me" visible={aboutModal} onHide={() => setAboutModal(false)}
                className="custom-dialog" style={{ width: '50vw', fontFamily:'Gluten'||'Arial' }}>
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </Dialog>
            {/* CONTACT modal */}
            <Dialog header="Contact Information" visible={contactModal} onHide={() => setContactModal(false)}
                className="custom-dialog" style={{ width: '50vw', fontFamily:'Gluten'||'Arial' }}>
                <p className="m-0 flex flex-col items-start gap-y-2">
                    Click to go to my...<br/>
                    <Button label="LinkedIn" className='text-xl' icon="pi pi-linkedin"
                        link onClick={() =>  window.open('https://www.linkedin.com/in/tanmaygupta100/', '_blank')}
                    />
                    <Button label="GitHub" className='text-xl' icon="pi pi-github"
                        link onClick={() =>  window.open('https://github.com/tanmaygupta100', '_blank')}
                    />
                    <a href="mailto:getgupta.tg@gmail.com">
                        <Button link
                            label="Email" 
                            className="text-xl" 
                            icon="pi pi-envelope"
                        />
                    </a>
                </p>
            </Dialog>
        </header>
    );

};

export default Header;