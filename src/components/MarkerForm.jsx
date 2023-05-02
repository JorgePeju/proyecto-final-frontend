export const MarkerForm = ({ selectedMarker, showModal, handleChange, handleSubmit }) => {

    return (
      <div className={`${
        showModal ? "fixed z-10 inset-0 overflow-y-auto" : "hidden"
      }`}
      >
        <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center">
          <div
            className="fixed inset-0 transition-opacity"
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
  
          <div
            className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <form  onSubmit={(e) => {handleSubmit(e, selectedMarker);}}>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-gray-700"
                >
                  Título:
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-gray-700"
                >
                  Descripción:
                </label>
                <textarea
                  id="description"
                  name="description"
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  rows="3"
                />
              </div>
              <div className="mb-4">
        <label
          className="block text-sm font-medium text-gray-700"
        >
          Tipo de Marcador:
        </label>
        <select
          id="iconType"
          name="iconType"
          onChange={handleChange}
          className="w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="Dungeon">Santuario</option>
          <option value="Tower">Torre</option>
        </select>
      </div>
              <button
                type="submit"
                className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
              >
                Guardar
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  

 