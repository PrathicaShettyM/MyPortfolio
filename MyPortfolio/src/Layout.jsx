import {Link} from 'react-router-dom';
import {useTypewriter} from "react-simple-typewriter";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Footer from './Footer';
import Header from './Header';

function Layout(){
    const [typeEffect] = useTypewriter({
        words: ['Frontend developer', 'Backend developer'],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 40
    });
    return(
        <div>
            <Header/>



            <section className='pt-[10rem] px-[9%] pb-[2rem] flex justify-center items-center h-[100vh] bg-slate-950'>
                <div className='text-white'>
                    <h3 className='text-3xl font-semibold'>Hello, It&apos;s Me</h3>
                    <h1 className='text-5xl font-bold text-yellow-400'>Prathica Shetty</h1>
                    <h3 className='text-3xl font-semibold'>And I&apos;m a <span className='text-yellow-400 font-bold'>{typeEffect}</span></h3>
                    
                    <p className='text-xl '>
                    I like building responsive web applications that solve real problems. 
                    From crafting smooth user interfaces to managing backend logic, 
                    I enjoy turning ideas into functional, user-friendly solutions.
                    </p>
                    
                    <div className='flex bg-transparent'>
                        <a className='border-4 p-2 rounded-full border-yellow-400 text-2xl mt-[3rem] mr-[1.5rem] mb-[3rem] ml-0' href="https://www.linkedin.com/in/prathica-shetty-m-25abbb259/"><FaLinkedinIn /></a>
                        <a className='border-4 p-2 rounded-full border-yellow-400 text-2xl mt-[3rem] mr-[1.5rem] mb-[3rem] ml-0' href="https://www.github.com/PrathicaShettyM"><FaGithub /></a>
                    </div>
                    <Link className='bg-yellow-400 text-gray-950 px-20 py-3 rounded-md text-2xl'>Download CV</Link>
                </div>
                
                <div>
                    <img className='w-[45vw]'/>
                </div>
            </section>


            
            <Footer/>
        </div>
        
    );
}
export default Layout;