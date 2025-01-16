import EmptyPanel from "../components/EmptyPanel";
import CustomButton from '../components/CustomButton';
import { useState } from "react";

const Projects = () => {

    const [activeFilters, setActiveFilters] = useState([]); // Sets an array
    const [buttonStates, setButtonStates] = useState({ // Sets keys
        JavaScript: 'grey',
        Python: 'grey',
        PHP: 'grey',
        'C#': 'grey',
        HTML: 'grey',
        'React.js': 'grey',
    });

    // Change button colour:
    const toggleFilter = (filter) => {
        // Toggle button
        setButtonStates( (prev) => ({
            ...prev,
            [filter]: prev[filter] === "grey" ? "yellow" : "grey",
        }) );

        // Add/remove filter
        setActiveFilters( (prev) =>
            prev.includes(filter)
                ? prev.filter((f) => f !== filter)
                : [...prev, filter]
        );
    };

    const panels = [
        {
            title: "SoundShape - Audio Remixer",
            year: "2025",
            subtitle: "JavaScript, React.js, CSS, HTML, Python",
            tags: ["JavaScript", "React.js", "HTML", "Python"],
            image: [
                "/images/SoundShape/1.png", // Main app here
                "/images/SoundShape/3.gif", // Gif of button glow and shadows
                "/images/SoundShape/4.png", // Image of Python UI
                "/images/SoundShape/5.png", // Image of old UI
            ],
            desc: [
                `Remix music in real time, with animated buttons! Create your own slowed-and-reverbed remixes, or sped-up audios.
                \nSoundShape lets users add reverb/echo, adjust speed, and add background white noise to their music, to give it a retro-vibe. The amount of reverb and amount of slowing down and speeding up can be adjusted by a range.
                \nThe main purpose of this project was to create customized components and animated effects, mimicking a MIDI board.`,

                `All buttons have a shadow effect, as well as an effect to look as if the button has been physically pressed-in.\nEffect-pad buttons also have a glow and hover-glow effect, as a MIDI keyboard would have.
                \nThe display the shows song names mimicks a Vacuum Fluorescent Display (VFD).
                \nThe glow and worn-out look to buttons, as well as the depth to the sliders, display, and vaporwave sun, are achieved through gradients and inner shadows.`,

                `Originally built with Python to understand button mapping and test real-time audio manipulation.
                \nBackend and frontend was rebuilt with JavaScript and TailwindCSS to enhance visuals and feedback.`,

                `Many iterations were made to the design, as seens above. Each iteration allowed for more experimentation with graphic design in code, specifically TailwindCSS.`,
            ],
        },
        {
            title: "Pokémon Capitalist - Web Game",
            year: "2024",
            subtitle: "JavaScript, PHP, React.js, Laravel, CSS, HTML",
            tags: ["JavaScript", "React.js", "PHP", "HTML"],
            image: [
                "/images/pokemon-capitalist/1.png", //
                "/images/pokemon-capitalist/2.png", //
                "/images/pokemon-capitalist/3.png", //
            ],
            desc: [
                `Welcome to Pokémon Capitalist! This is a game where you catch Pokémon, but with a twist!
                \nThe game is all about trading and catching Pokémon to become a business tycoon.
                \nYour objective could be to either complete the Pokédex, or earn as much game-money as possible.
                \nEach Pokémon is worth a certain amount of in-game currency. You can trade in caught Pokémon for currency in the PokéMart.
                \n\n This page is the Wild Area, where Pokémon randomly spawn based on their rarity. You can use Pokéballs of different strengths to catch them.`,
                `The PokéMart is the spot to buy items to catch more Pokémon! You can sell your caught Pokémon, of which you can catch as many as you see. The more rare the Pokémon, the higher the payday!`,
                `This is the Pokédex, where you can see the entire list of Pokémon available. You will see a red circle next to the names of Pokémon you have already caught once, so this page not just serves as an index, but also a history of gameplay!
                \n(Note! This game is a fan-made project created for educational purposes only. All rights to Pokémon and related trademarks, names, and designs belong to Nintendo and GameFreak. No copyright infringement is intended, and this project is not affiliated with or endorsed by Nintendo or GameFreak.)`,
            ]
        },
        {
            title: "Gradiator - Gradient Art Generator",
            year: "2024",
            subtitle: "Python, Data Analysis",
            tags: ["Python"],
            image: [
                "/images/gradiator/1.png", //
                "/images/gradiator/2.png", //
                "/images/gradiator/3.png", //
            ],
            desc: [
                `Processes & renders images through the Perlin algorithm to create cool gradient artworks! Uses the 5 most dominant colours in your image to use them to create heat-map designs.
                \n\n• Any arbitrary image is inputted. A program divides the image into a large matrix, based on the most prevalent colours in the image, ignoring the irrelevant colours.
                \n• Generated Heat-Map: Using the most prevalent colours, a program uses the Perlin algorithm to base the concentration of printed bits. Each colour is assigned to different depths and levels of concentration.
                \n• Gradient Image: Finally, the heat map artwork is transformed into a gradient design, blurring the pixel densities in a Gaussian effect.
                `,
                `Tested Progress of testing rendering techniques:
                \n1st row - Refining the brush strokes, color selections, and design complexity.
                \n2nd row - Finalizing the code and increasing output time-efficiency and costliness.`,
                `Libraries used:
                \nNumPy - For numerical operations and array handling.
                \nOpenCV - For image processing (computer vision tasks).
                \nscikit-learn - For machine learning algorithms (such as KMeans clustering).
                \nPillow (PIL) - For Image processing (basic image handling).`,
            ]
        },
        {
            title: "Haiku Ponderer - AI Text Generator",
            year: "2024",
            subtitle: "Python, JavaScript, TypeScript, Machine Learning, Language Learning Model, Data Analysis",
            tags: ["Python, JavaScript"],
            image: [
                "/images/haiku-ponderer/1.png", //
                "/images/haiku-ponderer/2.png", //
                "/images/haiku-ponderer/3.png", //
            ],
            desc: [
                `Trained a machine learning model to generate haikus that adhere to a theme based on a keyword given by a user.
                \nA user simply enters their prompt word, and receives an artistic haiku within seconds!`,
                `Example results above. Achieved results through use of a large-language model, trained using Kaggle's haiku dataset of 200+ examples.
                \nAssigned example user inputs to each poem based on theme.`,
                `Gathered, preprocessed, and formatted data, evaluating 5-7-5 syllable structure and converting to JSON format.
                \nFine-tuned GPT 4o-mini using the cleansed and formatted data. Evaluated training loss, validation loss, and full validation loss.`,
            ]
        },
        {
            title: "socialXchange - Web Game",
            year: "2023",
            subtitle: "JavaScript, PHP, React.js, Laravel, CSS, HTML",
            tags: ["JavaScript", "React.js", "PHP", "HTML"],
            image: [
                "/images/socialXchange/1.jpg", // Profile screen
                "/images/socialXchange/2.jpg", // Stocks screen
                "/images/socialXchange/3.jpg", // Trading screen
            ],
            desc: [
                `Designed the front-end for a stocks/trading educational website.
                \nProcesses real-time, mass-user input, with live updates to player statistics and leaderboard.
                \nUsers buy/sell artificial shares of internet personalities to reflect direct feedback based on current events.
                \nMain screen displays current portfolio shares, current balance, recent transactions, and the menu to access different screens.`,
                `The stocks/trading screen, featuring overall popular personalities of the day, and their basic statistics.`,
                `Expanded trading screen for specific personalities, showing in-depth statistics, as well as buying/selling options and additional game modes for upgrades to buying/selling shares.`,
            ]
        },
        {
            title: "Sentinel Skies - Tower Defense Game",
            year: "2023",
            subtitle: "C#, Unity, SQL",
            tags: ["C#"],
            image: [
                "/images/tower-defense/1.jpeg", // Main game screen
                "/images/tower-defense/2.jpeg", // Unity UI
            ],
            desc: [
                `Developed a real-time strategy game with a web-interface, customizability, & leaderboard database.
                \nGameplay, featuring enemy swarms, placeable turrets on the grid, as well as available upgrades. Shows health and waves remaining.`,
                `Behind-the-scenes of the early phases of development in Unity.
                \nClassified weekly Software Design Reports, Software Process Models, & Technical Specifications.
                \nLed a team of 5, adhering to Agile standards for delivery within 15 weeks.`,
            ]
        },
        {
            title: "Portfolio Website - This one!",
            year: "2025",
            subtitle: "JavaScript, React.js, TailwindCSS, HTML",
            tags: ["JavaScript", "React.js", "HTML"],
            image: [
                "/images/portfolio/1.png", //
                "/images/portfolio/2.png", //
                "/images/portfolio/3.png", //
                "/images/portfolio/4.png", //
            ],
            desc: [
                `This portfolio itself was coded fully by me! No WordPress, no templates. All React and Tailwind. There's an animated vaporwave grid at the bottom, animated buttons when pressed, and a beach theme across the site.`,
                `This site is built to be easily navigated on mobile as well. In the skills page, users can see my skill and education background, and can also minimize sections if they wish.`,
                `The projects page shows images/gifs of my different projects, with slides to go through the descriptions and gallery. You can filter projects by the languages used.`,
                `The initial designs were drawn out just to easily visualize and modify the design concepts, before actually manifesting the designs through code.`,
            ]
        },
        {
            title: "Kondense",
            year: "2025",
            subtitle: "Coming soon...",
            tags: ["JavaScript", "PHP", "Python"],
            image: [
                "/images/kondense/1.gif", // >:)
            ],
            desc: [
                `In development.`,
            ]
        },
    ];

    const filteredPanels = panels.filter( (panel) =>
        activeFilters.length === 0
            ? true
            : panel.tags.some((tag) => activeFilters.includes(tag))
    );



    return (
        <div>
            <div className="items-center my-5 ml-5 mr-2 lg:ml-20 flex flex-wrap gap-5 w-fit">
                <div className="font-bold flex flex-col">
                    <p>Filter</p>
                    <p>Projects:</p>
                </div>
                { ["JavaScript", "Python", "PHP", "C#", "HTML", "React.js"].map( (label) => (
                    <CustomButton
                        key={label}
                        colour={buttonStates[label]}
                        label={label}
                        onClick={ () => toggleFilter(label) }
                    />
                ) )}

            </div>
            <div className="my-5 flex flex-col items-center overflow-y-auto h-full">

                <div className="w-full px-5 lg:w-3/4 lg:mx-0 flex flex-col gap-y-5">
                    {filteredPanels.map( (panel, index) => (
                        <EmptyPanel
                            key={index}
                            title={panel.title}
                            year={panel.year}
                            subtitle={panel.subtitle}
                            image={panel.image}
                            desc={panel.desc}
                        />
                    ) )}
                </div>

            </div>
        </div>
    );
};

export default Projects;