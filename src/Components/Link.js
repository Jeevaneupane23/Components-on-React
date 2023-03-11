
import NavigationContext from "../Context/Navigation";
import { useContext } from "react";




function Link({to,children}){
    const {navigate}=useContext(NavigationContext);
  
 
    

  const onClick=(events)=>{
    events.preventDefault();
    navigate(to);


  }


    return(
        <a onClick={onClick}>{children}</a>
    )

}
export default Link;