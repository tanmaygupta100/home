import React from 'react';
import LargeButton from '../components/LargeButton';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    return (
        <div className="flex m-10 items-center lg:flex-row flex-col lg:gap-x-10 gap-y-10">
            <LargeButton
                colour="blue"
                label="Skills & Education"
                desc="Coding languages, technologies, and educational accomplishments"
                onClick={() => navigate('/skills')}
            />
            <LargeButton
                colour="yellow"
                label="Projects & Experience"
                desc="Exhibit of personal projects and work experiences"
                onClick={() => navigate('/projects')}
            />
        </div>
    );
};

export default Home;