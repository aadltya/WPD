import wplLogo from "../../public/WPL.png"


export const FooterDev = () =>  {
    return <div>
    
    <footer className="bg-neutral-950">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
                <a href="https://watchpeoplelie.vercel.app/" className="flex items-center mb-4">
                    <img src={wplLogo} className="h-8 me-3" alt="wpl Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">watch people lie</span>
                </a>
                <a className="text-sm font-semibold text-gray-500 dark:text-gray-400" href="https://twitter.com/aditya_swamii">Building in public at <span className="text-blue-500 ml-1" >@aditya_swamii</span></a>
            </div>
            <div className="grid grid-cols-2 gap-8 ">
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900  dark:text-white">Resources I use</h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        <li className="mb-4">
                            <a href="https://ui.aceternity.com/" className="hover:underline">Aceternity UI</a>
                        </li>
                        <li>
                            <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 dark:text-white">join me</h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        <li className="mb-4">
                            <a href="https://github.com/aadltya" className="hover:underline ">Github</a>
                        </li>
                        <li className="mb-4" >
                            <a href="https://adityasworld.vercel.app/" className="hover:underline">Portfolio</a>
                        </li>
                        <li>
                            <a href="https://twitter.com/aditya_swamii" className="hover:underline">Twitter</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</footer>

</div>
}