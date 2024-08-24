import CcomponentWithoutFC from "./components/CcomponentWithoutFC"
import AsimpleComponent from "./components/AsimpleComponent"
import BcomponentWprops from "./components/BcomponentWprops"
import DstateEffectComponent from "./components/DstateEffectComponent"
import EtypedEvents from "./components/EtypedEvents"
import AmyModernComponent from "./modernComponents/AmyModernComponent"
import BmodernStateEffect from "./modernComponents/BmodernStateEffect"
import CmodernTypedEvents from "./modernComponents/CmodernTypedEvents"

const App = () => {
  return (
    <div>
      app
      <AsimpleComponent/>
      <BcomponentWprops mensaje="hello from props"/>
      <CcomponentWithoutFC mensaje="hello, without React.FC and defining type : JSX.Element"/>
      <DstateEffectComponent/>
      <EtypedEvents onClick={alert}/>
      <h3>Modern components:</h3>
      <AmyModernComponent mensaje="Mensaje from modern component"/>
      <BmodernStateEffect/>
      <CmodernTypedEvents onClick={alert}/>
    
    </div>
  )
}

export default App
