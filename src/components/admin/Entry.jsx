import {useDeleteEntry} from '../../hooks'


export const Entry = ({ markerMongo, isLoading, refreshMarkers }) => {

  return (

    <>
      <div className="p-5 h-screen bg-gray-100 hidden lg:block">
        <div className="overflow-auto rounded-lg shadow">
          <table className="w-full">
            <thead className="bg-gray-50 border-b-2 border-gray-200">
              <tr>
                <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">
                  Título
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Descripción
                </th>
                <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                  Tipo
                </th>
                <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                  Usuario
                </th>
                <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">
                  Estado
                </th>
                <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">
                  Vista Detalle
                </th>
                <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">
                  Editar
                </th>
                <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">
                  Borrar
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {markerMongo.map((marker, index) => (

                <tr key={index} className="bg-white">
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <p className="font-bold text-blue-500 hover:underline">{marker.title}</p>
                  </td>
                  <td className="p-2 text-sm text-gray-700 whitespace-nowrap">
                    {marker.description.substring(0, 10)}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{marker.iconType}</td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{marker.userEmail}</td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <span className={`p-1 text-xs font-medium uppercase tracking-wider ${marker.status ? 'text-green-800 bg-green-200' : 'text-red-800 bg-red-200'} rounded-lg bg-opacity-50`}>
                      {marker.status ? 'Activado' : 'Inactivo'}
                    </span>
                  </td>
                  <td className="p-1 text-sm text-gray-700 whitespace-nowrap"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                    Vista Detalle
                  </button></td>
                  <td className="p-1 text-sm text-gray-700 whitespace-nowrap"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
                    Editar
                  </button></td>
                  <td className="p-1 text-sm text-gray-700 whitespace-nowrap">
                    <button onClick={() => useDeleteEntry(marker.id, 'marker', refreshMarkers)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded">
                    Borrar
                  </button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="p-5 h-screen bg-gray-100 lg:hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {markerMongo.map((marker, index) => (
            <div key={index} className="bg-white space-y-3 p-4 rounded-lg shadow">
              <div className="flex items-center space-x-2 text-sm">
                <div>
                  <p className="text-blue-500 font-bold hover:underline">
                    {marker.title}
                  </p>
                </div>
                <div className="text-gray-500">{marker.userEmail}</div>
                <div className="text-sm font-medium text-black">{marker.iconType}</div>
                <div>
                  <span className={`p-1.5 text-xs font-medium uppercase tracking-wider rounded-lg bg-opacity-50 ${marker.status ? "text-green-800 bg-green-200" : 'text-red-800 bg-red-200'}`}>
                    {marker.status ? "Activado" : "Inactivo"}
                  </span>
                </div>
              </div>
              <div className="text-sm text-gray-700">
                {marker.description.substring(0, 10)}
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
                  Vista Detalle
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
                  Editar
                </button>
                <button onClick={() => useDeleteEntry(marker.id, 'marker', refreshMarkers)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded">
                  Borrar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>

  );
};
