import CcomponentWithoutFC from "./components/CcomponentWithoutFC"
import AsimpleComponent from "./components/AsimpleComponent"
import BcomponentWprops from "./components/BcomponentWprops"
import DstateEffectComponent from "./components/DstateEffectComponent"

const App = () => {
  return (
    <div>
      app
      <AsimpleComponent/>
      <BcomponentWprops mensaje="hello from props"/>
      <CcomponentWithoutFC mensaje="hello, without React.FC and defining type : JSX.Element"/>
      <DstateEffectComponent/>
    </div>
  )
}

export default App
