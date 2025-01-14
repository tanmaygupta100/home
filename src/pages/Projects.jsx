import EmptyPanel from "../components/EmptyPanel";
import CustomButton from '../components/CustomButton';

const Projects = () => {
    return (
        <div>
            <div className="items-center my-5 ml-5 lg:ml-20 flex lg:flex-row flex-col gap-5 w-fit">
                <p className="items-center font-bold flex flex-col">
                    <p>Filter</p>
                    <p>Projects</p>
                </p>
                <CustomButton colour='yellow' label='JavaScript'></CustomButton>
                <CustomButton colour='yellow' label='Python'></CustomButton>
                <CustomButton colour='yellow' label='PHP'></CustomButton>
                <CustomButton colour='yellow' label='C#'></CustomButton>

            </div>
            <div className="my-5 flex flex-col items-center h-screen">

                <div className="w-full px-5 lg:w-3/4 lg:mx-0">
                    <EmptyPanel title='Pokémon Game' subtitle='JavaScript, PHP, React.js, Laravel'>
                    </EmptyPanel>
                </div>
            </div>
        </div>
    );
};

export default Projects;