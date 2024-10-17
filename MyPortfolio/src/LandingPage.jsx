import {Link} from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
function LandingPage(){
    return(
        <div className='bg-gray-950 m-0 p-0'>
        
            <header className='fixed top-0 right-0 w-[100%] py-[1.5rem] px-[6%] flex justify-between items-center z-[100] '>
            <Link to="/home" className='text-3xl font-bold text-white hover:text-yellow-400 transition duration-300 delay-150'>Portfolio.</Link>
        
            <nav className='text-2xl font-bold text-white'>
                <Link to="/skills" className='m-[1rem] hover:text-yellow-400 transition duration-100 ease-in-out'>Skills</Link>
                <Link to="/projects" className='m-[1rem] hover:text-yellow-400 transition duration-100 ease-in-out'>Projects</Link>
                <Link to="/contactme" className='m-[1rem] hover:text-yellow-400 transition duration-100 ease-in-out'>Contact Me</Link>
            </nav>
            </header>

            <section className='min-h-[100vh] pt-[10rem] px-[9%] pb-[2rem] flex justify-center items-center'>
                <div className='text-white font-bold'>
                    <h3 className='text-3xl'>Hello, It&apos;s Me</h3>
                    <h1 className='text-5xl'>Prathica Shetty M</h1>
                    <h3 className='text-3xl'>And I&apos;m a <span>Frontend Developer</span></h3>
                    <p className='text-xl '>
                    
                    </p>
                    <div className='inline-flex justify-center items-center w-[4rem] h-[4rem] bg-transparent'>
                        <Link className='border-4 p-2 rounded-full border-yellow-400 text-2xl rounded mt-[3rem] mr-[1.5rem] mb-[3rem] ml-0' path=""><FaLinkedinIn /></Link>
                        <Link className='border-2 border-yellow-400 text-2xl rounded mt-[3rem] mr-[1.5rem] mb-[3rem] ml-0' path="">X</Link>
                        <Link className='border-2 border-yellow-400 text-2xl rounded mt-[3rem] mr-[1.5rem] mb-[3rem] ml-0' path="">Instagram</Link>
                    </div>
                    <Link className='bg-yellow-400 text-gray-950 px-20 py-3 rounded-md text-2xl'>Download CV</Link>
                </div>
                
                <div>
                    <img className='w-[35vw] '/>
                </div>
            </section>


            <footer>

            </footer>
        </div>
        
    );
}
export default LandingPage;