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
                    <div className="flex justify-center">
                        <p className="font-bold text-xl">Coding Languages & Libraries</p>
                    </div>
                    <span className="flex justify-start pt-5 font-medium text-xl">Frontend:</span>
                        <ul className="list=disc ml-6 text-lg lg:text-xl">
                            <li>JavaScript, React.js, CSS, HTML</li>
                        </ul>
                </div>
            }

            <br /><br />

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
                    <p>hi</p>
                </div>
            }
        </div>
    );
};

export default Skills;