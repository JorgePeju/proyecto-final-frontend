import { MapContainerComp} from "../components"
import { getMarker } from "../helpers/getMarker"



export const HomePage = () => {

  let url = 'http://localhost:3000/api/v1/entries'
  getMarker(url)

  return (

    <>

    <MapContainerComp/>
    
    </>

  )
}
