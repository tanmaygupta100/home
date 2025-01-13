import React from 'react';
import LargeButton from '../components/LargeButton';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    return (
        <div className='absolute top-1/4 lg:mt-5 flex flex-col w-full gap-y-20 px-10 lg:w-1/2 lg:left-1/4'>
            <LargeButton
                    colour='blue'
                    label="Skills & Education"
                    desc="Coding languages, technologies, and educational accomplishments"
                    onClick={() => navigate('/skills')}
                />
                <LargeButton
                    colour='yellow'
                    label="Projects & Experience"
                    desc="Exhibit of personal projects and work experiences"
                    onClick={() => navigate('/projects')}
                />
        </div>
    );
};

export default Home;