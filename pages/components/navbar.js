import { useState } from "react";
import { motion } from 'framer-motion'


export default function Navbar() {
    const [menuHidden, setMenuHidden] = useState(true)

    return (
    <nav className="relative container mx-auto p-6">
        <div  className="flex items-center justify-between text-white">
            <motion.h1 initial={{  opacity: 0}} animate={{  opacity: 1}} transition={{duration: .4}} className=" text-lg tracking-widest">SESSI KUWABARA BLANCHARD</motion.h1>
            <motion.div initial={{ x: 100, opacity: 0}} animate={{ x: 0, opacity: 1}} transition={{delay: .4, duration: .4}} className="hidden md:flex space-x-6">
                <div href="#" className="hover:text-red-900 transition-all">ABOUT</div>
                <div href="" className="hover:text-red-900 transition-all">WRITING</div>
                <div href="" className="hover:text-red-900 transition-all">SPEAKING</div>
                <div href="" className="hover:text-red-900 transition-all">STORE</div>
                <div href="" className="hover:text-red-900 transition-all">CONTACT</div>
            </motion.div>

            <button  onClick={() => setMenuHidden(!menuHidden)} className={`block hamburger md:hidden focus:outline-none ${menuHidden ? '' : 'open'} `}>
                <span className="hamburger-top bg-white"></span>
                <span className="hamburger-middle bg-white"></span>
                <span className="hamburger-bottom bg-white"></span>
            </button>

        </div>

        <div className="md:hidden">
            <motion.div initial={{opacity: 0}} animate={menuHidden ? {opacity: 0} : {opacity: 1}} transition={{duration: .1}} className={`absolute flex flex-col justify-center justify-self-center items-center
            pt-4 mt-10 space-y-6  bg-[#0d0100] font-medium text-white sm:w-auto sm:self-center left-6 right-6 border-2 pb-10`}>
                <div className=""></div>
                <div href="#" className="hover:text-red-900 transition-all">ABOUT</div>
                <div href="" className="hover:text-red-900 transition-all">WRITING</div>
                <div href="" className="hover:text-red-900 transition-all">SPEAKING</div>
                <div href="" className="hover:text-red-900 transition-all">STORE</div>
                <div href="" className="hover:text-red-900 transition-all">CONTACT</div>
            </motion.div>
        </div>

    </nav>

  )
}
