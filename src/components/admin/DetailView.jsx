

import { useFetchMarkers } from '../../hooks';
import { AdminFormEntry } from './'
import { useParams } from 'react-router-dom';

export const DetailView = ({refreshMarkers}) => {

  const { id } = useParams();
  const { markers, isLoading } = useFetchMarkers('entries', id)

  return (
    <>
      {
        isLoading ?
          <p>Cargando...</p>
          :
          <div className="absolute z-1k1 top-28 left-0 z-10">
            <div className="h-full w-80">
              <AdminFormEntry markers={markers} id={id} refreshMarkers={refreshMarkers}/>
            </div>
          </div>


      }

</>
)}


