import { useState } from "react";
import {GoChevronDown,GoChevronLeft} from 'react-icons/go';
import Panel from "./Panel";



function DropDown({ options,value,onChange }) {
    const [isOpen, setIsOpen] = useState(false)
 
    const renderedOptions = options.map((option) => {
        return (<div className="hover:bg-sky-100 cursor-pointer p-1" onClick={()=>{handleOptionClick(option)}} key={option.value} >
            {option.label}
        </div>)
    })
    function handleOptionClick(option) {
        setIsOpen((currentValue)=>{
            return !currentValue;
        })
       onChange(option);

  
        
    }
     
    function handleClick() {
        setIsOpen((currentValue)=>{
            return !currentValue;
        })
    }
  
//  let content=selection?selection.label:"Select...";

 let icon=isOpen?<GoChevronDown/>:<GoChevronLeft/>
 





    return (
        <div className="w-48 relative">
            <Panel className="flex justify-between items-center " onClick={handleClick}>{value?.label || "Select..."}{icon}</Panel>
            {isOpen && <Panel className="absolute top-full ">
               {renderedOptions}
            </Panel>}
        </div>
    )
}
export default DropDown;  