// import { useState } from "react";

import { Route, Routes, useLocation } from "react-router-dom";
import Index from ".";
import Auth from "./auth";
import Product from "./products";
import Create from "./components/Product/createproduct";
import Get from "./components/Product/getproduct";
import Layout from "./components/Layouts/layout";
 

const App=()=>{
   const location = useLocation();
   const isAuthPath = location.pathname === "/";

  // const [count,setCount]=useState(0);
   
  return(
    <>
    {/* <div className="flex justify-center items-center w-screen h-screen flex-col ">
    <h1 >{`count value${count}`}</h1>
    <button className="bg-slate-600 p-2 border-2 text-white"  onClick={()=>{
     return setCount(count+1)
       
    }}
    >count ++
    </button>
    <button className="bg-slate-600 p-2 border-2 text-white" onClick={()=>{
      return setCount(count-1)
    }}>count  --</button>
      
      
       
    </div> */}
     
    <div className="flex justify-center items-center w-screen h-screen flex-col "> 
    {isAuthPath ? (
      <Routes>
        <Route index element={<Auth/>}></Route>
      </Routes>
    ):(
      <Layout>
      <Routes>
        
        <Route path="index" element={<Index/>}> </Route>
        <Route path="product"element={<Product/>}></Route>
        <Route path="product" >
          <Route Index element={<Product/>}></Route>
          <Route path="createproduct" element={
          <Product>
          <Create/>
          </Product>
                }>

          </Route>
          <Route path="getproduct" element={
          <Product>
           <Get/>
          </Product>
                }>

          </Route>
        </Route>
        
      </Routes>  
      </Layout> 
)}
     
     </div>


    </>
  )
}

export default App;