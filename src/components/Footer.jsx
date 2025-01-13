import './footer.css';

const Footer = () => {
    return (
        <div className="main-content">
            <footer className="w-full flex flex-col items-center">
                <div className="flex gap-44 mt-2 relative">
                    <div className="w-full h-[40px] bg-white absolute top-0 z-10"></div>
                    {/* Angled Lines */}
                    {Array.from({ length: 11 }).map((_, index) => {
                        const angle = (index - 5) * -10;
                        return (
                            <div
                                key={`angled-${index}`}
                                className="w-1 h-40 bg-black"
                                style={{
                                    transform: `rotate(${angle}deg)`,
                                    transformOrigin: "bottom center",
                                }}
                            ></div>
                        );
                    })}
                    
                    {/* Horizontal Lines */}
                    {Array.from({ length: 4 }).map((_, index) => (
                        <div
                            key={`horizontal-${index}`}
                            className="w-full h-[2px] bg-black absolute animated-line"
                            style={{ bottom: `${index * 36}px` }}
                        ></div>
                    ))}
                </div>
            </footer>
        </div>

    );
};

export default Footer;