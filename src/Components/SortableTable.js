import { useState } from "react";
import Table from "./Table";
import { GoArrowSmallUp,GoArrowSmallDown } from "react-icons/go";
import { Fragment } from "react";
function SortableTable(props) {
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);

    const { config,data } = props;

    const handleClick = (label) => {

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

    const upadatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        }
        return {
            ...column,
            header: () =><th onClick={() => handleClick(column.label)} className="flex items-center cursor-pointer hover:bg-gray-100"> <div>{showIcon(column.label,sortBy,sortOrder)}</div>{column.label}</th>
        }
    })

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

    return <div>
       
        <Table {...props} config={upadatedConfig} data={sortedData} />
    </div>

}

function showIcon(label,sortBy,sortOrder){
    if(label!==sortBy){
        return <Fragment><GoArrowSmallUp/><GoArrowSmallDown/></Fragment>
    }
    if(sortOrder===null){
        return <Fragment><GoArrowSmallDown/><GoArrowSmallUp/></Fragment>;
    }
    else if(sortOrder==='asc'){
        return  <GoArrowSmallDown/>;
    }
    else if(sortOrder==='desc'){
        return <GoArrowSmallUp/>;
    }

}

export default SortableTable;