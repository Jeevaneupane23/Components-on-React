import useCounter from '../hooks/use-counter';
import Button from '../Components/Button'




export default function CounterPage({intialCount}) {
    const {count,increment}=useCounter(intialCount);
  



    return (
      <div>
        <h1>Count Is {count}</h1>
        <Button primary onClick={increment}>Click Here</Button>

        
      </div>
    )
  
}
