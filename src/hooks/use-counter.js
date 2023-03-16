import { useState,useEffect } from "react";
function useCounter(intialCount){
    const [count,setCount]=useState(intialCount);
 
    useEffect(()=>{
        

    },[count])
    
    const increment=()=>{
        setCount((count)=>{
            return count+1;
        })
    }
    return {
        count,
        increment,
    }

}

export default useCounter;