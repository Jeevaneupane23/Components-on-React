import DropDown from "./Components/DropDown";


function App(){

  const options=[
    {
      id:1,
      label:"Red",
      value:"red"
    },
    {
      id:2,
      label:"Green",
      value:"green"
    },
    {
      id:3,
      label:"Blue",
      value:"blue"
    }
  ]




  return (
    <DropDown options={options}/>
  )
}

export default App;