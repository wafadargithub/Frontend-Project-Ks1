import axios from "axios";
import { useEffect, useState } from "react";
import Index from "../..";

 
const Get =()=>{
    const [data,setData]=useState("");
    const getAllUser= async () =>{
        try{
            const {data} =await axios.get("http://localhost:5000/user/get-all-users",{
          withCredentials:true,
            }) 
             

        if(data.data.length>0){
            return setData(data.data)
        }

        }catch(error){
            console.error(error);
        }
    }

    const UserCard=({user})=>{
        return(
            <div  key={Index} className="w-1/4 flex flex-row h-2/6 justify-between rounded-md bg-blue-500">
            <div className="w-1/4 h-2/6  rounded-md p-2 ">
            <p className="text-white text-lg font-normal">{user.userId}</p>
            <p  className="text-white text-lg font-normal">{user.name}</p>
            <p  className="text-white text-lg font-normal">{user.username}</p>
            <p  className="text-white text-lg font-normal">{user.email}</p>
            </div>
            </div> 
        )
    }

    useEffect(()=>{
        getAllUser();
    },[])
    return(
        <>
         
        <div className="w-full h-full  p-2 justify-between flex flex-wrap  gap-2 overflow-y-scroll">

            {data.length > 0 ?(
                <>
                {data.map((user,index)=>{
                    return(
                      <UserCard key={index} user={user}/>
                    )
                })}
                </>
            ) : (
                <>
                <div>
                    {" "}
                    <p>no user exists</p>
                </div>
                </>
            )
            
        }
           
            {/* {data.length > 0 ? (
                <>
                 {data.map((user,index)=>{
                 return(
                    <div key={Index}  className="w-1/4 flex flex-col h-2/6 justify-center bg-blue-500 rounded-md p-2">
                 <p  className="text-white text-lg font-normal">userId</p>
                 <p  className="text-white text-lg font-normal">name</p>
                 <p  className="text-white text-lg font-normal">username</p>
                 <p  className="text-white text-lg font-normal">email</p>
                 </div>
                 )
                 })}

            </>):(  <><div>{""} <p>no user exists </p></div>{" "} </>)}
             */}
          
        </div>
        </>
    )
}

export default Get;