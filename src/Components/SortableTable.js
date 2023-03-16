import UseSort from "../hooks/use-sort";
import Table from "./Table";
import { GoArrowSmallUp,GoArrowSmallDown } from "react-icons/go";
import { Fragment } from "react";
function SortableTable(props) {

   

    const { config,data } = props;
    const {sortSetColumn,sortBy,sortOrder,sortedData}=UseSort(data,config);

    const upadatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        }
        return {
            ...column,
            header: () =><th onClick={() => sortSetColumn(column.label)} className="flex items-center cursor-pointer hover:bg-gray-100"> <div>{showIcon(column.label,sortBy,sortOrder)}</div>{column.label}</th>
        }
    })

   


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