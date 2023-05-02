import { MapContainerComp} from "../components"
import {MarkerProvider} from '../context/MarkerProvider'

export const HomePage = () => {


  return (

    <MarkerProvider>

    <MapContainerComp/>
    
    </MarkerProvider>

  )
}
