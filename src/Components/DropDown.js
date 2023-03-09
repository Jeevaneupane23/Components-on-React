import { useState } from "react";




function DropDown({ options }) {
    const [isOpen, setIsOpen] = useState(false)
 
    const renderedOptions = options.map((option) => {
        return (<div onClick={()=>{handleOptionClick(option)}} key={option.id} id={option.value}>
            {option.label}
        </div>)
    })
    function handleOptionClick(option) {
        setIsOpen((currentValue)=>{
            return !currentValue;
        })

  
        
    }
  
    function handleClick() {
        setIsOpen((currentValue)=>{
            return !currentValue;
        })
    }
  


 





    return (
        <div>
            <div onClick={handleClick}>Select...</div>
            <div>
                {isOpen && renderedOptions}
            </div>
        </div>
    )
}
export default DropDown;