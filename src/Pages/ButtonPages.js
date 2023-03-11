import Button from '../Components/Button';
import {GoHeart} from 'react-icons/go'
import {GoGlobe} from 'react-icons/go'
import {GoPerson} from 'react-icons/go'
import {GoWatch} from 'react-icons/go'
import {GoStar} from 'react-icons/go'

function ButtonPage() {

  const handleClick=()=>{
    
  }
  return (
    <div>
      <div>
        <Button primary rounded onClick={handleClick} ><GoHeart/> Click Me</Button>
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

export default ButtonPage;
