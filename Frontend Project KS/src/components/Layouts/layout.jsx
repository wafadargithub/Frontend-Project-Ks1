import Navbar from "./nav-bar";
import Sidebar from "./side-bar";

 

const Layout=({children})=>{
    return(
        <>
        <div className="bg-gray-200 h-full w-full">
             <Navbar/>
             <div className="w-full h-full pt-20 flex">
             <Sidebar/>
             {children}
             </div>
        </div>
        </>
    )
}

export default Layout;