import { useState } from "react";


function UseSort(data,config){
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);


const sortSetColumn = (label) => {

    if(sortBy && label!==sortBy){
        setSortBy(label);
        setSortOrder('asc');
        return;
    }
    if (sortOrder === null) {
        setSortOrder('asc');
        setSortBy(label);
    }
    else if (sortOrder === 'asc') {
        setSortOrder('desc');
        setSortBy(label);
    }
    else if (sortOrder === 'desc') {
        setSortOrder(null);
        setSortBy(null);
    }
}
     //!Only sort the data when sortOrder && sortBy are not null

    //!Make copy of data prop

    //!Find the correct sort value function

    let sortedData=data;

    if(sortBy && sortOrder){
        const {sortValue}=config.find((column)=>column.label===sortBy);
        sortedData=[...data].sort((a,b)=>{
            const valueA=sortValue(a);
            const valueB=sortValue(b);

            const reverseOrder=sortOrder==='asc'?1:-1;

            if(typeof valueA==="string"){

                return valueA.localeCompare(valueB)*reverseOrder;

            }
            else{
                return (valueA-valueB)*reverseOrder;
            }
        })
    }

    return {
        sortSetColumn,
        sortBy,
        sortOrder,
        sortedData

    }

}

export default UseSort;