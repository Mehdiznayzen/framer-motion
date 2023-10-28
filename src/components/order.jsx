import { motion, useCycle } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'

const variantDiv = {
    initial : {
        y : '-100vh'
    },
    animate : {
        y : 0,
        transition : {
            duration : 1,
            type : 'spring',
            stifness : 600
        }
    },
}


const variantLoader = {
    animateOne: {
        x : [-20, 0, 20],
        y : [0, -30],
        transition : {
            x : {
                duration : 0.5,
                repeat : Infinity,
                repeatType: 'reverse',
                ease : 'linear'
            },
            y : {
                duration : 0.25,
                repeat : Infinity,
                repeatType: 'reverse',
                ease : 'linear'
            }
        }
    },
    animateTwo :{
        x : 0,
        y : [0, -40],
        transition : {
            y : {
                duration : 0.4,
                repeat : Infinity,
                repeatType: 'reverse',
                ease : 'linear'
            }
        }
    }

}

function Order({ nameStep1 , nameStep2 }) {
    const [animation , cycleAnimation] = useCycle('animateOne', 'animateTwo')

    return (
        <motion.div
            variants={variantDiv}
            initial='initial'
            animate='animate'
            className="order-container grid text-center gap-14">
            <h1 className='text-white font-semibold tracking-widest text-2xl'>Thank you for your order : )</h1>
            <h3 className='text-purple-300 font-semibold'>You ordered a Thin & Crispy pizza with : </h3>
            {
                nameStep1 && nameStep2 ? 
                <div className="">
                    <p>{nameStep1}</p>
                    <p>{nameStep2}</p>
                </div> 
                : <label className='text-lg' htmlFor=''>Come back and choose a pizza components</label>
            }
            <motion.button
                animate = {{
                    scale:[1, 1.2]
                }}
                transition={{
                    duration: 0.6,
                    repeat : Infinity,
                    repeatType : 'reverse',
                    ease : 'linear'
                }}
                className=' h-[40px] rounded-xl cursor-pointer tracking-widest font-bold' style={{border:'2px solid #fff'}}>
                <Link to={'/'}>Play Again</Link>
            </motion.button>
            <div className="loader-container flex items-center justify-center">
                <motion.div 
                    variants={variantLoader}
                    animate={animation}                    
                    className="loader w-[15px] h-[15px] rounded-full bg-white"
                ></motion.div>
            </div>
            <motion.button
                drag
                // dragConstraints={{left : 20}}
                className='border p-2 rounded-xl'  onClick={() => cycleAnimation()}
            >
                    Changer the animation
            </motion.button>
        </motion.div>
    )
}

export default Order