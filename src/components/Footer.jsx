import './footer.css';

const Footer = () => {
    return (
        <div className="main-content">
            <footer className="w-full flex flex-col items-center">
                <div className="flex gap-44 mt-2 relative">
                    
                    {/* White Gradient */}
                    <div
                        className="w-full h-[100px] absolute top-0 z-10"
                        style={{
                            background: "linear-gradient(to bottom, white 55%, rgba(255, 255, 255, 0) 100%)",
                        }}
                    />
                    <div
                        className="w-[50px] h-full absolute right-0 z-10"
                        style={{
                            background: "linear-gradient(to left, white 8%, rgba(255, 255, 255, 0) 100%)",
                        }}
                    />
                    <div
                        className="w-[50px] h-full absolute left-0 z-10"
                        style={{
                            background: "linear-gradient(to right, white 8%, rgba(255, 255, 255, 0) 100%)",
                        }}
                    />
                    

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