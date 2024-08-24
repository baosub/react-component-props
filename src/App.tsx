import CcomponentWithoutFC from "./CcomponentWithoutFC"
import AsimpleComponent from "./components/AsimpleComponent"
import BcomponentWprops from "./components/BcomponentWprops"

const App = () => {
  return (
    <div>
      app
      <AsimpleComponent/>
      <BcomponentWprops mensaje="hello from props"/>
      <CcomponentWithoutFC mensaje="hello, without React.FC and defining type : JSX.Element"/>
    </div>
  )
}

export default App
