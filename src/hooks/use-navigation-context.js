import NavigationContext from "../Context/Navigation";
import { useContext } from "react";


function useNavigation(){


    return useContext(NavigationContext);
}

export default useNavigation;