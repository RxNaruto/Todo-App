import { Button } from "./components/Button";
import { Heading } from "./components/Heading"
import { Inputbox } from "./components/Inputbox";

const App=()=>{
  return(<div className="bg-neutral-900 h-screen flex justify-center">

   <div className="flex flex-col justify-items-center">
   <div className="pt-10"><Heading label={"Todo"} /></div>
  <div className="flex">
    <Inputbox label={"Task"} placeholder={"Enter the task"}/>
    <Inputbox label={"Description"} placeholder={"Enter the Description"}/>
    <Button label={"Add Todo"} />
  </div>
   </div>
  </div>
    
    
    
    
  )
}
export default App;