import { useState } from "react";
import DropDown from "../Components/DropDown";


function DropDownPage(){
  const [selection,setSelection]=useState(null); 

 
  


  function handleSelect(option){
    setSelection(option);

    

  }

  const options=[
    {
      
      label:"Red",
      value:"red"
    },
    {
      
      label:"Green",
      value:"green"
    },
    {
      
      label:"Blue",
      value:"blue"
    }
  ]




  return (
    <div className="flex">
    <DropDown options={options} onChange={handleSelect} value={selection}/>
    
    
    </div>
  )
}

export default DropDownPage;