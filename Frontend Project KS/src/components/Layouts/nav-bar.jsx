import { Link } from "react-router-dom";

const Navbar=()=>{
    return(
        <>
        <div className=" absolute top-0 bg-purple-900 h-20 w-full border-b-2 border-white px-8 flex justify-end ">
            <div className="h-full w-2/5  flex items-center justify-between">
            <Link to="/index" className="text-xl text-white font-semibold">Home</Link>
            <p className="text-xl text-white font-semibold">About us</p>
            <p className="text-xl text-white font-semibold">Contact us</p>


            </div>
        </div>
        </>
    )
}

export default Navbar;