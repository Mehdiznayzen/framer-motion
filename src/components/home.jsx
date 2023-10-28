import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'

const variantBtn = {
    hover : {
        x : [0, 20, 0, -20, 0],
        // scale:1.1, 
        textShadow: '1px 1px 2px purple, 0 0 1em blue, 0 0 0.2em blue',
        boxShadow:'1px 1px 10px #fff'
    }
}

function Home() {
    return (
        <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:0.8}}
            className="home-container grid items-center justify-center gap-14"
        >
            <h1 className='text-xl md:text-4xl tracking-widest'>Welcome to pizza joint</h1>
            <div className="btn-container flex items-center justify-center">
                <motion.button
                    variants={variantBtn}
                    whileHover='hover'
                    style={{border:'3px solid #fff'}} 
                    className='text-lg text-purple-300 w-[200px] cursor-pointer 
                    h-[50px] rounded-3xl'
                >
                    <Link to={'/step1'}>Create your Pizza</Link>
                </motion.button>
            </div>
        </motion.div>
    )
}

export default Home