import { FaCode } from "react-icons/fa6";

function Header(){
    return(
        <div className="shadow-md w-full fixed top-0 left-0">
            <div className="md:px-10 py-4 px-7 md:flex justify-between items-center bg-slate-950 text-white">
                
                <div className="flex text-4xl cursor-pointer items-center gap-2">
                    <FaCode className="w-10 h-10 text-yellow-400 "/>
                    <span className="font-bold text-yellow-400">
                        PSM
                    </span>
                </div>
                     
            </div>
        </div>
    );
}
export default Header;