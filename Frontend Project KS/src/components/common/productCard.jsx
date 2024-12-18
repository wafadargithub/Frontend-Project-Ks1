const ProductCard=({prod})=>{
    return(
        <div  key={Index} className="w-1/4 flex flex-row h-2/6 justify-between rounded-md bg-blue-500">
        <div className="w-1/4 h-2/6  rounded-md p-2 ">
        <p className="text-white text-lg font-normal">{prod.userId}</p>
        <p  className="text-white text-lg font-normal">{prod.name}</p>
        <p  className="text-white text-lg font-normal">{prod.username}</p>
        <p  className="text-white text-lg font-normal">{prod.email}</p>
        </div>
        </div> 
    )
}
export default ProductCard;