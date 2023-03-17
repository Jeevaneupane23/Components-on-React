// import { useState } from 'react'
import { useReducer } from 'react'

import Button from '../Components/Button'
import Panel from '../Components/Panel'

const reducer =(state,action)=>{
  if(action.type==='increment'){

    return {
      ...state,
      count:state.count+1,
    }
  }
  if(action.type==='decrement'){

    return {
      ...state,
      count:state.count-1,
    }
  }

  if(action.type==='change-value-to-add'){
    return {
      ...state,
      valueToAdd:action.payLoad,
    }
  }




  return {
    ...state
  };

  


};


export default function CounterPage({intialCount}) {
  // const [count,setCount]=useState(intialCount);
  // const [valueToAdd,setValueToAdd]=useState(0);

  const [state,dispatch]=useReducer(reducer,{
    count:intialCount,
    valueToAdd:0,
  })


  const increment=()=>{
    // setCount(count+1);
    dispatch({
      type:'increment'
    });
    
  }
  const decrement=()=>{
    // setCount(count-1)
    dispatch({
      type:'decrement'
    })

  }

  const handleChange=(events)=>{
       const value= parseInt(events.target.value) || 0;
       dispatch({
        type:'change-value-to-add',
        payLoad:value,
       })

      //  setValueToAdd(value);

  }

  const handleSubmit=(events)=>{
    events.preventDefault();
    // setCount(count+valueToAdd);
    // setValueToAdd("");

  }

   
  



    return (
      <Panel className='m-3'>
        <h1 className='text-lg'>Count Is {state.count}</h1>
        <div className='flex gap-4 mt-4'>
        <Button primary onClick={increment}>Click Here</Button>
        <Button danger onClick={decrement}>Click Here</Button>
        </div>

        <form onSubmit={handleSubmit}>
          <label>Add a lot !</label>
          <input value={state.valueToAdd || ""} onChange={handleChange} type="number" className='p-1 m-3 bg-gray-50 border border-gray-300'/>
          <Button secondary>Add It</Button>
        </form>

        
      </Panel>
    )
  
}
