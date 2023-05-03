import {MapContainerComp} from '../components/MapContainerComp'
import {MarkerProvider} from '../context/MarkerProvider'

export const HomePage = () => {


  return (

    <MarkerProvider>

    <MapContainerComp/>
    
    </MarkerProvider>

  )
}
