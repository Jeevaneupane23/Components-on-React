import { useState,useEffect,useRef } from "react";
import {GoChevronDown,GoChevronLeft} from 'react-icons/go';
import Panel from "./Panel";



function DropDown({ options,value,onChange }) {
    const [isOpen, setIsOpen] = useState(false)
    const divEl=useRef();


    useEffect(()=>{
        const handler=(event)=>{
            if(!divEl.current){
                return;//when our div is not visible int the screen
            }
          if(!divEl.current.contains(event.target)){
            setIsOpen(false)
          }
        }
        document.addEventListener("click",handler);
        return ()=>{
            document.removeEventListener("click",handler);

        };
      },[])
 
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
        <div ref={divEl} className="w-48 relative">
            <Panel className="flex justify-between items-center cursor-pointer " onClick={handleClick}>{value?.label || "Select..."}{icon}</Panel>
            {isOpen && <Panel className="absolute top-full ">
               {renderedOptions}
            </Panel>}
        </div>
    )
}
export default DropDown;  