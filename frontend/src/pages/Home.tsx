import { Link } from "react-router-dom"

export const Home = () => {
    return  <div className="">
    <div className="max-w-screen-xl">
        <header className="bg-white shadow-sm">
            <div className="container w-full px-4 py-4 flex justify-between items-center">
                <h1 className="text-2xl text-black">Medium</h1>
                <div className="flex space-x-4">
                    <Link to={'/signup'} >
                        <button className="text-white bg-black p-2 px-6 rounded-md">Sign Up</button>
                    </Link>
                    <Link to={'/signin'} >
                        <button className="text-white bg-black p-2 px-6 rounded-md">Sign In</button>
                    </Link>
                </div>
            </div>
        </header>
    </div>
  </div>
}