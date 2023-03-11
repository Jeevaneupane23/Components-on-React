import Link from "./Components/Link";
import Route from "./Components/Route";
import AccordionPages from "./Pages/AccordionPages";
import ButtonPage from "./Pages/ButtonPages";
import DropDownPage from "./Pages/DropDownPage";

function App(){

return (
  <div>
   <Link to="/accordion">accordion</Link>
   <Link to="/dropdown">dropdown</Link>
   <Link to="/button">Button</Link>

   <div>
    <Route path="/accordion">
      <AccordionPages/>

    </Route>
    <Route path="/dropdown">
      <DropDownPage/>

    </Route>
    <Route path="/button">
      <ButtonPage/>

    </Route>
   </div>
  </div>
)

}

export default App;