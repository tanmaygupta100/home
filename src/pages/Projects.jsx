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
            subtitle: "JavaScript, React.js, CSS, HTML",
            tags: ["JavaScript", "React.js", "HTML"],
        },
        {
            title: "Pokémon Capitalist - Web Game",
            subtitle: "JavaScript, PHP, React.js, Laravel, CSS, HTML",
            tags: ["JavaScript", "React.js", "PHP", "HTML"],
        },
        {
            title: "Gradient Designer - Art Generator",
            subtitle: "Python, Data Analysis",
            tags: ["Python"],
        },
        {
            title: "socialXchange",
            subtitle: "JavaScript, PHP, React.js, Laravel, CSS, HTML",
            tags: ["JavaScript", "React.js", "PHP", "HTML"],
        },
        {
            title: "Portfolio Website",
            subtitle: "JavaScript, React.js, CSS, HTML",
            tags: ["JavaScript", "React.js", "HTML"],
        },
        {
            title: "Kondense",
            subtitle: "Coming soon...",
            tags: ["JavaScript", "PHP"],
        },
    ];

    const filteredPanels = panels.filter( (panel) =>
        activeFilters.length === 0
            ? true
            : panel.tags.some((tag) => activeFilters.includes(tag))
    );



    return (
        <div>
            <div className="items-start my-5 ml-5 lg:ml-20 flex flex-wrap gap-5 w-fit">
                <p className="items-center font-bold flex flex-col">
                    <p>Filter</p>
                    <p>Projects</p>
                </p>
                { ["JavaScript", "Python", "PHP", "C#", "HTML", "React.js"].map( (label) => (
                    <CustomButton
                        key={label}
                        colour={buttonStates[label]}
                        label={label}
                        onClick={ () => toggleFilter(label) }
                    />
                ) )}

            </div>
            <div className="my-5 flex flex-col items-center h-screen">

                <div className="w-full px-5 lg:w-3/4 lg:mx-0 flex flex-col gap-y-5">
                    {filteredPanels.map( (panel, index) => (
                        <EmptyPanel
                            key={index}
                            title={panel.title}
                            subtitle={panel.subtitle}
                        />
                    ) )}
                </div>
            </div>
        </div>
    );
};

export default Projects;