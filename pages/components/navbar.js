import { useState } from "react";
import { motion } from 'framer-motion'
import Link from "next/link";

export default function Navbar() {
    const [menuHidden, setMenuHidden] = useState(true)

    return (
    <nav className="relative container mx-auto p-6">
        <div  className="flex items-center justify-between text-white">
            <Link href='/'><motion.h1 initial={{  opacity: 0}} animate={{  opacity: 1}} transition={{duration: .4}} className="text-md sm:text-lg tracking-widest cursor-pointer">SESSI KUWABARA BLANCHARD</motion.h1></Link>
            <motion.div initial={{ x: 100, opacity: 0}} animate={{ x: 0, opacity: 1}} transition={{delay: .4, duration: .4}} className="hidden md:flex space-x-6">
                <Link href="/blogs"><a className="hover:text-red-900 transition-all">BLOG</a></Link>
                <div href="" className="hover:text-red-900 transition-all">WRITING</div>
                <div href="" className="hover:text-red-900 transition-all">SPEAKING</div>
                <div href="" className="hover:text-red-900 transition-all">STORE</div>
                <Link href="/contact"><a className="hover:text-red-900 transition-all">CONTACT</a></Link>
            </motion.div>

            <button onClick={() => setMenuHidden(!menuHidden)} className={`block hamburger md:hidden focus:outline-none ${menuHidden ? '' : 'open'} `}>
                <span className="hamburger-top bg-white"></span>
                <span className="hamburger-middle bg-white"></span>
                <span className="hamburger-bottom bg-white"></span>
            </button>

        </div>

        <div className="md:hidden">
            <motion.div initial={{opacity: 0}} animate={menuHidden ? {opacity: 0} : {opacity: 1}} transition={{duration: .4}} className={`absolute flex flex-col justify-center justify-self-center items-center pt-4 mt-10 space-y-6  bg-[#0d0100] font-medium text-white sm:w-auto sm:self-center left-6 right-6 border-2 pb-10`}>
                <div className=""></div>
                <Link href="/blogs"><a onClick={() => setMenuHidden(!menuHidden)} className="hover:text-red-900 transition-all">BLOG</a></Link>
                <div href="" className="hover:text-red-900 transition-all">WRITING</div>
                <div href="" className="hover:text-red-900 transition-all">SPEAKING</div>
                <div href="" className="hover:text-red-900 transition-all">STORE</div>
                <Link href="/contact"><a onClick={() => setMenuHidden(!menuHidden)} className="hover:text-red-900 transition-all">CONTACT</a></Link>
            </motion.div>
        </div>

    </nav>

  )
}
