import { MapContainerComp } from '../components/MapContainerComp'
import { MarkerProvider } from '../context/MarkerProvider'
// import { MarkerContext } from '../context'
// import { useContext, useEffect } from 'react';

export const HomePage = () => {

  // const { marker } = useContext(MarkerContext);


  return (

    <MarkerProvider>

    <MapContainerComp/>
    
    </MarkerProvider>

  )
}
