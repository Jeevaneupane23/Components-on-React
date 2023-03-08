import { useState } from "react";
import { BsFillCaretDownFill } from "react-icons/bs";
import { BsFillCaretLeftFill } from "react-icons/bs";


function Accordion({ items }) {
    const [expandedIndex,setExpandedIndex]=useState(-1 );
    const handleClick=(nextindex)=>{
        setExpandedIndex(nextindex);
        if(nextindex===expandedIndex){
            setExpandedIndex()
        }
       }
    const renderedItems = items.map((item,index) => {
       const isExpanded=index===expandedIndex;
     const icon=<span className="text-4xl" >
        {isExpanded?<BsFillCaretDownFill/>:<BsFillCaretLeftFill/>}
     </span>
     
   
        return (
            <div  key={item.id}>
                <div className="flex p-3 bg-grey-50 border-b items-center cursor-pointer justify-between" onClick={()=>handleClick(index)}>{item.label}{icon}</div>
                {isExpanded &&  <div className="border-b p-5 ">{item.content}</div>}
              
            </div>
        )
    })



    return (
        <div className="border-x border-t rounded">
            {renderedItems}

        </div>
    )
}

export default Accordion;