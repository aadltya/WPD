import wplLogo from "../assets/WPL.png";


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
                <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">Building in public at <a target="_blank" href="https://twitter.com/aditya_swamii" className="text-blue-500 ml-1" >@aditya_swamii</a></span>
            </div>
            <div className="grid grid-cols-2 gap-8 ">
                
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 dark:text-white">join me</h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        <li className="mb-4">
                            <a href="https://github.com/aadltya" target="_blank" className="hover:underline ">Github</a>
                        </li>
                        <li className="mb-4" >
                            <a href="https://twitter.com/aditya_swamii" target="_blank" className="hover:underline">Twitter</a>
                        </li>
                        <li>
                            <a href="https://adityasworld.vercel.app/" target="_blank" className="hover:underline">Portfolio</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</footer>

</div>
}