
export const FilterPanel = ({ leftPanel, setLeftPanel }) => {

  return (
    <div className="absolute z-1k1 left-0">
      {leftPanel &&
        <div className="flex">
          <div className="h-screen flex flex-col bg-backgroundZelda p-4 w-60 justify-between">
            <div >
              <img src="src/assets/logo.png" alt="" srcSet="" />
            </div>
            <div className="items-center ">
              <div className="text-white ">
              <button type="submit" onClick={() => handleButtonClick('Tower')} className="w-full my-4 block bg-zyellow hover:bg-zbgcosa text-white font-semibold rounded-lg px-4 py-2">
                Torres
                </button>
              </div>
              <div className="text-white ">
              <button type="submit" onClick={() => handleButtonClick('Dungeon')} className="w-full my-4 block bg-zyellow hover:bg-zbgcosa text-white font-semibold rounded-lg px-4 py-2">
                Santuarios
                </button>
              </div>
              <div className="text-white ">
              <button type="submit" onClick={() => handleButtonClick('')} className="w-full my-4 block bg-zyellow hover:bg-zbgcosa text-white font-semibold rounded-lg px-4 py-2">
                Quitar Filtros
                </button>
              </div>
            </div>
            <div>
              <img src="src/assets/Edited1.png" alt="" srcSet=""/>
            </div>
          </div>
          <div className="flex items-center">
            <button
              className="bg-zbgcosa text-white px-2 py-8 mb-4 "
              onClick={() => setLeftPanel(false)}
            >
              X
            </button>
          </div>
        </div>
      }

      {!leftPanel &&
        <button
          className="bg-zbgcosa text-white px-4 py-2 rounded mx-2.5 my-2.5"
          onClick={() => setLeftPanel(true)}
        >
          Abrir
        </button>
      }
    </div>


  );
};









