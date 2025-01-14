import { useState } from "react";
import SectionButton from "../components/SectionButton";

const Skills = () => {
    const [skillsBox, setSkillsBox] = useState(true)
    const [schoolBox, setSchoolBox] = useState(true)

    return (
        <div className='absolute top-1/4 flex flex-col w-full px-10 lg:w-1/2 lg:left-1/4'>
            <SectionButton
                label="Skills"
                icon={ skillsBox ? 'pi pi-chevron-down' : 'pi pi-chevron-up' }
                desc="Exhibit of personal projects and work experiences"
                onClick={() => setSkillsBox(!skillsBox)}
            />
            { skillsBox &&
                <div
                    className="p-5 m-5 mb-0 lg:ml-20 ml-0 w-full lg:w-3/4"
                    style={{border:'black 3px solid', borderRadius:'10px', backgroundColor:'#E6EEFF'}}
                >
                    {/* Coding Languages: */}
                    <div className="text-center">
                        <p className="font-bold text-xl">Coding Languages & Libraries</p>
                    </div>
                    <p className="font-medium text-xl mt-1">Frontend:</p>
                    <ul className="list-disc ml-6 text-lg lg:text-xl">
                        <li>JavaScript, React.js, CSS, HTML</li>
                    </ul>
                    <p className="font-medium text-xl mt-1">Backend:</p>
                    <ul className="list-disc ml-6 text-lg lg:text-xl">
                        <li>PHP, Python, C#, MySQL</li>
                    </ul>

                    {/* Dev Tools: */}
                    <div className="text-center">
                        <p className="font-bold text-xl mt-5">Development Tools</p>
                    </div>
                    <p className="font-medium text-xl mt-1">Frameworks & Engines</p>
                    <ul className="list-disc ml-6 text-lg lg:text-xl">
                        <li>Laravel (PHP), Unity (C#), Tailwind CSS</li>
                    </ul>
                    <p className="font-medium text-xl mt-1">Project Management</p>
                    <ul className="list-disc ml-6 text-lg lg:text-xl">
                        <li>Git (GitHub & BitBucket), Jira</li>
                    </ul>
                    <p className="font-medium text-xl mt-1">{`Webpage UI (CMS's)`}</p>
                    <ul className="list-disc ml-6 text-lg lg:text-xl">
                        <li>WordPress, Shopify, Drupal</li>
                    </ul>
                </div>
            }

            <div className="lg:mt-10 mt-5" />

            <SectionButton
                label="Education"
                icon={ schoolBox ? 'pi pi-chevron-down' : 'pi pi-chevron-up' }
                desc="Exhibit of personal projects and work experiences"
                onClick={() => setSchoolBox(!schoolBox)}
            />
            { schoolBox &&
                <div
                    className="p-5 m-5 lg:ml-20 ml-0 w-full lg:w-3/4"
                    style={{border:'black 3px solid', borderRadius:'10px', backgroundColor:'#E6EEFF'}}
                >
                    <div className="text-center">
                        <p className="font-bold text-xl">Coding Languages & Libraries</p>
                    </div>
                    
                    <p className="font-medium text-xl mt-5">Frontend:</p>
                    <ul className="list-disc ml-6 text-lg lg:text-xl">
                        <li>JavaScript, React.js, CSS, HTML</li>
                    </ul>

                    <p className="font-medium text-xl mt-5">Backend:</p>
                    <ul className="list-disc ml-6 text-lg lg:text-xl">
                        <li>PHP, Python, C#, MySQL</li>
                    </ul>
                </div>
            }
        </div>
    );
};

export default Skills;