import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { linksStep2 } from '../data/data'
import { Link } from 'react-router-dom'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'


function Step2({ setNameStep2 }) {
    const [hiddenButton, setHiddenButton] = useState(false)
    const [active, setActive] = useState('')
    return (
        <motion.div 
            className="step1-container grid gap-6"
            initial={{x:'-100vw', opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{type:'spring', stiffness:'70', delay:0.3}}
        >
            <div className="title-container grid gap-2">
                <h1 className='text-2xl'>Step 2 : Choose Toppings</h1>
                <div className="underline w-[100%] h-[3px] rounded-full mx-4 bg-purple-300"></div>
            </div>
            {
                linksStep2.map((item) => {
                    const activeClass = active === item.name ? 'active' : ''
                    return(
                        <ul key={item.id} className='px-3'>
                            <motion.li key={item.id}
                                onClick={() => {
                                    setHiddenButton(true)
                                    setActive(item.name)
                                    setNameStep2(item.name)
                                }}
                                whileHover={{originX:0, color:'orange', x:6}}
                                className='text-purple-950 cursor-pointer font-semibold tracking-widest flex gap-5'>
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
                    initial={{x:'-100vw'}}
                    animate={{x:0}}
                    className="btn-container">
                    <motion.button 
                        whileHover={{
                            scale:1.1, 
                            boxShadow:'1px 1px 10px #fff'
                        }}
                        type="submit" 
                        style={{border:'3px solid #fff'}} 
                        className='rounded-xl w-[150px] h-[40px] tracking-widest font-semibold'>
                        <Link to={'/order'}>Next</Link>
                    </motion.button>
                </motion.div>
            }
        </motion.div>
    )
}

export default Step2