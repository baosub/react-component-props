import AsimpleComponent from "./components/AsimpleComponent"
import BcomponentWprops from "./components/BcomponentWprops"

const App = () => {
  return (
    <div>
      app
      <AsimpleComponent/>
      <BcomponentWprops mensaje="hello from props"/>
      
    </div>
  )
}

export default App
