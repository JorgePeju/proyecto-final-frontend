import { useFormAdmin } from '../../hooks'


export const AdminFormEntry = ({ markers, id, refreshMarkers }) => {

  const { handleChange, handleSubmit, error } = useFormAdmin(id, refreshMarkers)
 


  const findError = (fieldName) => {
    const fieldError = error?.find(err => err.path === fieldName);
    return fieldError ? fieldError.msg : null;
  }
  
  return (
    <>
      <div className="inline-block w-full max-w-lg p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
        
            <p className="text-sm font-medium text-gray-700 my-2">
              Email: {markers[0].userEmail}
            </p>
            <p className="text-sm font-medium text-gray-700 my-2">
              Rol: {markers[0].userRole}
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Título:
            </label>
            <input type="text" id="title" name="title" defaultValue={markers[0].title} onChange={handleChange} className="w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
           {findError('title') && <p className="text-xs text-red-500 mt-1">{findError('title')}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Descripción:
            </label>
            <textarea id="description" name="description" defaultValue={markers[0].description} onChange={handleChange} className="w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
            {findError('description') && <p className="text-xs text-red-500 mt-1">{findError('description')}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Icono actual: {markers[0].iconType === "Dungeon" ? "Santuario" : "Torre"}:
            </label>
            <select id="iconType" name="iconType" onChange={handleChange} className="w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
              <option value="Dungeon">Santuario</option>
              <option value="Tower">Torre</option>
            </select>
            {findError('iconType') && <p className="text-xs text-red-500 mt-1">{findError('iconType')}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Estado actual: {markers[0].status === true ? "Activado" : "Inactivo"}:
            </label>
            <select id="status" name="status" onChange={handleChange} className="w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
              <option value="true">Activado</option>
              <option value="false">Inactivo</option>
            </select>
            {findError('status') && <p className="text-xs text-red-500 mt-1">{findError('status')}</p>}
          </div>
          <button type="submit" className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500">
            Guardar
          </button>
        </form>
      </div>
    </>
  );
}

