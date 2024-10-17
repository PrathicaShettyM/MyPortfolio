import {Link} from 'react-router-dom';
import {useTypewriter} from "react-simple-typewriter";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Footer from './Footer';



function LandingPage(){
    const [typeEffect] = useTypewriter({
        words: ['Frontend developer', 'Backend developer'],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 40
    });
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
                <div className='text-white'>
                    <h3 className='text-3xl font-semibold'>Hello, It&apos;s Me</h3>
                    <h1 className='text-5xl font-bold text-yellow-400'>Prathica Shetty</h1>
                    <h3 className='text-3xl font-semibold'>And I&apos;m a <span className='text-yellow-400 font-bold'>{typeEffect}</span></h3>
                    
                    <p className='text-xl '>
                    I like building responsive web applications that solve real problems. 
                    From crafting smooth user interfaces to managing backend logic, 
                    I enjoy turning ideas into functional, user-friendly solutions.
                    </p>
                    
                    <div className='flex justify-center items-center w-[4rem] h-[4rem] bg-transparent p-5'>
                        <a className='border-4 p-2 rounded-full border-yellow-400 text-2xl mt-[3rem] mr-[1.5rem] mb-[3rem] ml-0' href="https://www.linkedin.com/in/prathica-shetty-m-25abbb259/"><FaLinkedinIn /></a>
                        <Link className='border-4 p-2 rounded-full border-yellow-400 text-2xl mt-[3rem] mr-[1.5rem] mb-[3rem] ml-0' path="https://www.github.com/PrathicaShettyM"><FaGithub /></Link>
                        <Link className='border-4 p-2 rounded-full border-yellow-400 text-2xl mt-[3rem] mr-[1.5rem] mb-[3rem] ml-0' path=""><FaXTwitter /></Link>
                    </div>
                    <Link className='bg-yellow-400 text-gray-950 px-20 py-3 rounded-md text-2xl'>Download CV</Link>
                </div>
                
                <div>
                    <img className='w-[35vw] '/>
                </div>
            </section>


            <Footer/>
        </div>
        
    );
}
export default LandingPage;