import { motion } from 'framer-motion'
import React from 'react'

function Header() {
    return (
        <motion.div 
            className="logo w-[100%] grid gap-2"
            initial={{y:-250}}
            animate={{y:0}}
            transition={{delay:0.2, type:'spring', stiffness:400}}
        >
            <h1 className='text-xl md:text-2xl font-semibold tracking-widest'>Pizza Joint</h1>
            <div className="underline h-[3px] rounded-2xl w-[100%]" style={{background:'#D07FFE'}}></div>
        </motion.div>
    )
}

export default Header