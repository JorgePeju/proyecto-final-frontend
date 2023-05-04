import { MapContainerComp } from '../components/MapContainerComp'
import { UserPanel } from '../components/user/UserPanel'
import { MarkerProvider } from '../context/MarkerProvider'

export const HomePage = () => {

  return (

    <MarkerProvider>

      {/* <UserPanel /> */}
      <MapContainerComp />
      
    </MarkerProvider>

  )
}
