import { Link } from "react-router-dom";
import { BackgroundBeams } from "../components/ui/background-beams";
import { Cursor } from "../components/Cursor";

export function Home() {
  return <div className="" >
    <div className="h-screen w-full bg-neutral-950 relative flex flex-col items-stretch antialiased" >
            <div className="flex justify-between px-10 py-4">
                <div className="flex flex-col justify-center">
                    <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black">
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
            <div className="max-w-2xl mx-auto p-4">
                <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                    Watch People Lie
                </h1>
                <p></p>
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
        <Cursor />
    </div>
</div>
}

