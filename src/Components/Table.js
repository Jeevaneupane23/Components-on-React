import { Fragment } from "react";



function Table({ data, config ,keyFn}) {

    const renderedhead = config.map((title) => {
        if(title.header){
            return <Fragment key={title.label}>{title.header()}</Fragment>;
        }
        return <th key={title.label}>{title.label}</th>
    })

    const renderedbody = data.map((rowData) => {

        const renderedCells=config.map((items)=>{
            return(
                <td className="p-2" key={items.label}>{items.render(rowData)}</td>
            )
        })
        return (
            <tr className="border-b" key={keyFn(rowData)}>
                {renderedCells}

            </tr>
        )

    })





    return (
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">

                    {renderedhead}

                </tr>

            </thead>
            <tbody>
                {renderedbody}

            </tbody>
        </table>
    )
}

export default Table;