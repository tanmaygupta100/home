import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';


const Header = () => {
    const location = useLocation(); // Avoids needing to pass current path to App.js.
    const [hoveredIndex, setHoveredIndex] = useState(null); // Tracks which button is hovered.
    const [activeIndex, setActiveIndex] = useState(null); // Tracks which button is active (clicked).

    const getButtons = () => {
        switch(location.pathname) {
            case '/':
                return [
                    { to: '#', label: 'About' },
                    { to: '#', label: 'Contact' },
                ];
            case '/skills':
                return [
                    { to: '/projects', label: 'Projects', icon: 'pi pi-graduation-cap' },
                    { to: '/', label: 'Home' },
                ];
            case '/projects':
                return [
                    { to: '/skills', label: 'Skills', icon: 'pi pi-lightbulb' },
                    { to: '/', label: 'Home', icon: 'pi pi-home' },
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
                        <Link key={index} to={btn.to} >
                            <Button
                                label={btn.label}
                                icon={btn.icon}
                                className="rounded-xl border-2 border-black py-4 px-4 drop-shadow-lg
                                    font-bold text-2xl gap-x-2 flex justify-center items-center"
                                style={{
                                    backgroundColor: activeIndex === index
                                        ? '#a0a5ab' // Active (clicked) color
                                        : hoveredIndex === index
                                        ? '#bcc2ca' // Hover color
                                        : '#e2e8f0', // Default color
                                    boxShadow: '4px 4px 0px 0px rgba(0, 0, 0, 1)',
                                    transition: 'all 0.3s ease', // Smooth transition
                                }}
                                onMouseEnter={() => setHoveredIndex(index)} // Set hover index
                                onMouseLeave={() => setHoveredIndex(null)} // Reset hover
                                onMouseDown={() => setActiveIndex(index)} // When clicked
                                onMouseUp={() => setActiveIndex(null)} // When released
                            />
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );

};

export default Header;