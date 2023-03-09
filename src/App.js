import DropDown from "./Components/DropDown";


function App(){

  const options=[
    {
      label:"Red",
      value:"red"
    },
    {
      label:"Green",
      value:"green"
    },
    {
      label:"Blue",
      value:"blue"
    }
  ]




  return (
    <DropDown options={options}/>
  )
}

export default App;