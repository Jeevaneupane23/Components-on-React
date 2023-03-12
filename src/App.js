import SideBar   from "./Components/SideBar";
import Route from "./Components/Route";
import AccordionPages from "./Pages/AccordionPages";
import ButtonPage from "./Pages/ButtonPages";
import DropDownPage from "./Pages/DropDownPage";
import ModalPage from "./Pages/ModalPage";


function App(){

return (
  <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
   <SideBar/>

   <div className="col-span-5">
    <Route path="/accordion">
      <AccordionPages/>

    </Route>
    <Route path="/">
      <DropDownPage/>

    </Route>
    <Route path="/button">
      <ButtonPage/>

    </Route>
    <Route path="/modal">
      <ModalPage/>

    </Route>
   </div>
  </div>
)

}

export default App;