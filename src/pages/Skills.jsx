import { useState } from "react";
import SectionButton from "../components/SectionButton";

const Skills = () => {
    const [skillsBox, setSkillsBox] = useState(true)
    const [schoolBox, setSchoolBox] = useState(true)

    return (
        <div className="flex justify-center">
            <div className='absolute top-1/5 mt-5 flex lg:flex-row flex-col lg:w-4/5 mx-5 gap-x-16 gap-y-1 lg:items-top justify-center'>

                {/* Skills Panel */}
                <div>
                    <SectionButton
                        label="Skills"
                        icon={ skillsBox ? 'pi pi-chevron-down' : 'pi pi-chevron-up' }
                        desc="Exhibit of personal projects and work experiences"
                        onClick={() => setSkillsBox(!skillsBox)}
                    />
                    { skillsBox &&
                        <div
                            className="p-5 m-5 mb-0 lg:ml-10 ml-0 w-full"
                            style={{border:'black 3px solid', borderRadius:'10px', backgroundColor:'#E6EEFF'}}
                        >
                            {/* Coding Languages: */}
                            <div className="text-center">
                                <p className="font-bold text-xl">CODING LANGUAGES & LIBRARIES</p>
                            </div>
                            <p className="font-bold text-xl mt-1">Frontend:</p>
                            <ul className="list-disc ml-6 text-lg lg:text-xl">
                                <li>JavaScript, React.js, CSS, HTML</li>
                            </ul>
                            <p className="font-bold text-xl mt-1">Backend:</p>
                            <ul className="list-disc ml-6 text-lg lg:text-xl">
                                <li>PHP, Python, C#, MySQL</li>
                            </ul>

                            {/* Dev Tools: */}
                            <div className="text-center">
                                <p className="font-bold text-xl mt-5">DEVELOPMENT TOOLS</p>
                            </div>
                            <p className="font-bold text-lg lg:text-xl mt-1">Frameworks & Engines</p>
                            <ul className="list-disc ml-6 text-base lg:text-lg">
                                <li>Laravel (PHP), Unity (C#), Tailwind CSS</li>
                            </ul>
                            <p className="font-bold text-lg lg:text-xl mt-1">Project Management</p>
                            <ul className="list-disc ml-6 text-base lg:text-lg">
                                <li>Git (GitHub & BitBucket), Jira</li>
                            </ul>
                            <p className="font-bold text-lg lg:text-xl mt-1">{`Webpage UI (CMS's)`}</p>
                            <ul className="list-disc ml-6 text-base lg:text-lg">
                                <li>WordPress, Shopify, Drupal</li>
                            </ul>
                        </div>
                    }
                </div>

                <div className="mt-5" />

                {/* Education Panel */}
                <div>
                    <SectionButton
                        label="Education"
                        icon={ schoolBox ? 'pi pi-chevron-down' : 'pi pi-chevron-up' }
                        desc="Exhibit of personal projects and work experiences"
                        onClick={() => setSchoolBox(!schoolBox)}
                    />
                    { schoolBox &&
                        <div
                            className="p-5 m-5 lg:ml-10 ml-0 w-full"
                            style={{border:'black 3px solid', borderRadius:'10px', backgroundColor:'#E6EEFF'}}
                        >
                            <div className="justify-center items-center flex flex-row">
                                <div>
                                    <img
                                        src="/psu-logo.png" alt=""
                                        style={{ width: '100px', height: 'auto' }}
                                    />
                                </div>
                                <div className="pl-5 text-start">
                                    <p className="font-bold text-base lg:text-2xl">THE PENNSYLVANIA <br></br>STATE UNIVERSITY</p>
                                    <p className="font-medium text-base lg:text-lg">Class of 2025 <br></br>Brandywine & Behrend Campuses</p>
                                </div>
                            </div>
                            
                            {/* Major: */}
                            <p className="font-bold text-xl mt-1">Software Engineering - Bachelor of Science</p>
                            <ul className="list-disc ml-6 text-base lg:text-lg">
                                <li>Jane E. Cooper Honors Program</li>
                                <li>Dean's List Scholar</li>
                                <li>Engineering Club President</li>
                            </ul>

                            {/* Courses: */}
                            <p className="font-bold text-xl mt-5">Course Content:</p>
                            <ul className="list-disc ml-6 text-base lg:text-lg">
                                <li>Object-Oriented Programming (OOP)</li>
                                <li>Machine Learning</li>
                                <li>Software Architecture</li>
                                <li>Agile Methodologies</li>
                                <li>Verification, Validation & Testing (V, V&T)</li>
                                <li>Embedded Real-Time Systems (Raspberry Pi)</li>
                            </ul>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Skills;