import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

function Footer(){
    return(
        <footer className="relative left-0 bottom-0 h-[10vh] py-5 flex flex-col sm:flex-row items-center justify-center gap-5 sm:px-20 text-white bg-gray-950">
            <section className="text-2xl">Let&apos;s connect on</section>
            <section className="flex items-center justify-center gap-5 text-3xl text-white">
                <a className="hover:text-yellow-400 transition-all ease-in-out duration-300" href="#instagram"><FaInstagram /></a>
                <a className="hover:text-yellow-400 transition-all ease-in-out duration-300" href="#x"><FaXTwitter /></a>
            </section>
        </footer>
    );
}

export default Footer;