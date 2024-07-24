// import { useState, useRef } from 'react';
// import gsap from 'gsap';
import { Link } from "react-router-dom";
import { BackgroundBeams } from "../components/ui/background-beams";
import { RevealCard } from '../components/Reveal-card';
import { ThreeDCard } from "../components/3d-card";
import { FooterDev } from "../components/FooterDev";

// type CursorVariant = "default" | "text";

// const variants: Record<CursorVariant, React.CSSProperties> = {
//     default: {
//         width: 32, 
//         height: 32, 
//         backgroundColor: "#1a202c", 
//         borderRadius: "50%",
//     },
//     text: {
//         width: 120,
//         height: 120,
//         backgroundColor: "grey",
//         mixBlendMode: "difference",
//         borderRadius: "50%",
//     },
// };

export function Home() {
    // const [cursorVariant] = useState<CursorVariant>("default");
    // const cursorRef = useRef<HTMLDivElement | null>(null);

    // useEffect(() => {
    //     const mouseMove = (e: MouseEvent) => {
    //         const cursor = cursorRef.current;
    //         if (cursor) {
    //             gsap.to(cursor, {
    //                 x: e.clientX - 16, 
    //                 y: e.clientY - 16, 
    //                 duration: 0.1, 
    //                 ease: "power2.out",
    //             });
    //         }
    //     };

    //     window.addEventListener('mousemove', mouseMove);

    //     return () => {
    //         window.removeEventListener('mousemove', mouseMove);
    //     };
    // }, []);

    // const textEnter = () => {
    //     setCursorVariant("text");
    // };

    // const textLeave = () => {
    //     setCursorVariant("default");
    // };

    return (
        <div className="select-none">
            <div className="h-screen w-full bg-neutral-950 relative flex flex-col items-stretch antialiased">
                <div className="flex justify-between px-10 py-4 relative z-10">
                    <div className="flex flex-col justify-center">
                        <h1 className="animate-text cursor-default bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black">
                            WPL
                        </h1>
                    </div>
                    <div className="flex space-x-4">
                        <Link to="/signup">
                            <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-800">Sign up</button>
                        </Link>
                        <Link to="/signin">
                            <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-800">Sign in</button>
                        </Link>
                    </div>
                </div>

                <div className="h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
                    <div className="max-w-2xl mx-auto p-4 cursor-default">
                        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
                            Watch People Lie
                        </h1>
                        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                            Welcome to WPL, the best platform to lie on the web.
                            We provide reliable, scalable, and customizable for
                            your needs. Whether you're creating posts,
                            password reset, or faking your identity, WPL has got you
                            covered.
                        </p>
                    </div>
                    <BackgroundBeams />
                </div>

                {/* <div>
                    <div
                        ref={cursorRef}
                        className="fixed top-0 left-0"
                        style={variants[cursorVariant]} 
                    />
                </div> */}
            </div>
            
            <div className="h-screen bg-neutral-950 relative flex flex-col items-center antialiased" >
                <div className="h-screen w-11/12 grid grid-cols-2 gap-6 " >
                    <div className="" >
                        <ThreeDCard />
                    </div>
                    
                    <div className="" >
                        <RevealCard />
                    </div>
                </div>
            </div>
            <footer>
                <FooterDev />
            </footer>
        </div>
    );
}