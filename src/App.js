import Button from "./Button";
import {GoHeart} from 'react-icons/go'
import {GoGlobe} from 'react-icons/go'
import {GoPerson} from 'react-icons/go'
import {GoWatch} from 'react-icons/go'
import {GoStar} from 'react-icons/go'

function App() {

  const handleClick=()=>{
    console.log("Button was clicked");
  }
  return (
    <div>
      <div>
        <Button primary rounded onClick={handleClick} className="mb-5"  ><GoHeart/> Click Me</Button>
      </div>
      <div>
        <Button secondary rounded onMouseOver={handleClick} > <GoGlobe/>Buy Now</Button>
      </div>
      <div>
        <Button success ><GoPerson/> See Deal</Button>
      </div>
      <div>
        <Button warning > <GoWatch/> Hide Ads</Button>
      </div>
      <div>
        <Button danger ><GoStar/> Something!</Button>
      </div>
     
    
    </div>
  )
}

export default App;
