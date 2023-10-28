import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
import { linksStep1 } from '../data/data';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'


// Variant of the div container
const variantDiv = {
    initial : {
        x:'-100vw', 
        opacity:0
    },
    animate : {
        x:0, 
        opacity:1,
        transition : {
            type:'spring', 
            stiffness:'70', 
            delay:0.3
        }
    }
}

const variantbtn = {
    initial : {
        x:'-100vw'
    },
    animate : {
        x:0
    }
}

function Step1({ setNameStep1 }) {
    const [active, setActive] = useState('')

    const [hiddenButton, setHiddenButton] = useState(false)
    return (
        <motion.div 
            className="step1-container grid gap-6"
                variants={variantDiv}
                initial='initial'
                animate='animate'
        >
            <div className="title-container grid gap-2">
                <h1 className='text-2xl'>Step 1 : Choose Your base</h1>
                <div className="underline w-[100%] h-[3px] rounded-full mx-4 bg-purple-300"></div>
            </div>
            {
                linksStep1.map((item) => {
                    const activeClass = active === item.name ? 'active' : ''
                    return(
                        <ul key={item.id} className='px-3'>
                            <motion.li key={item.id} onClick={
                                () => {
                                    setHiddenButton(true)
                                    setActive(item.name)
                                    setNameStep1(item.name)
                                }
                            } 
                                whileHover={{originX:0, color:'orange', x:6}}
                                className='text-purple-950 flex items-center gap-6 cursor-pointer font-semibold tracking-widest'>
                                    {
                                        active === item.name ? <div className='text-2xl text-white'><MdOutlineKeyboardArrowRight/></div> : <></>
                                    }
                                    <span className={activeClass}>{item.name}</span>
                            </motion.li>
                        </ul>
                    )
                })
            }
            {
                hiddenButton && 
                <motion.div 
                    variants={variantbtn}
                    initial='initial'
                    animate='animate'
                    className="btn-container">
                    <motion.button 
                        whileHover={{
                            scale:1.1, 
                            boxShadow:'1px 1px 10px #fff'
                        }}
                        type="submit" 
                        style={{border:'3px solid #fff'}} 
                        className='rounded-xl w-[150px] h-[40px] tracking-widest font-semibold'>
                        <Link to={'/step2'}>Next</Link>
                    </motion.button>
                </motion.div>
            }
        </motion.div>
    )
}

export default Step1