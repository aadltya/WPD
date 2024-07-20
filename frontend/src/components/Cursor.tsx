import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export const Cursor = () => {
    const [mousePos, setMousePos] = useState({
        x:0,
        y:0
    }) 

    const [cursorVariant, setCursorVariant] = useState("default")

    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            setMousePos({
                x: e.clientX,
                y: e.clientY 
            })
        }

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        }
    }, [])
    
    const variants = {
        default: {
            x: mousePos.x - 16,
            y: mousePos.y - 16,
            backgroundColor: "#1a202c"
        }
    }

    return <div>
        <motion.div 
            className="bg-red-600 h-8 w-8 rounded-full fixed top-0 left-0 "
            variants={variants}
            animate={cursorVariant}
        />
    </div>
}