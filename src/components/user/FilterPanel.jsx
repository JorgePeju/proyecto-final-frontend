
export const FilterPanel = ({ leftPanel, setLeftPanel }) => {

  return (
    <div className="absolute z-1k1 left-0">
      {leftPanel &&
        <div className="flex">
          <div className="h-screen flex flex-col bg-backgroundZelda p-4 w-60 justify-between">
            <div >
              <img src="src/assets/logo.png" alt="" srcSet="" />
            </div>
            <div className="items-center">
              <div className="text-white ">
                boton 1
              </div>
              <div className="text-white ">
                boton 2
              </div>
            </div>
            <div>
              <img src="src/assets/Edited1.png" alt="" srcSet=""/>
            </div>
          </div>
          <div className="flex items-center">
            <button
              className="bg-blue-500 text-white px-2 py-8 mb-4 "
              onClick={() => setLeftPanel(false)}
            >
              X
            </button>
          </div>
        </div>
      }

      {!leftPanel &&
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mx-2.5 my-2.5"
          onClick={() => setLeftPanel(true)}
        >
          Abrir
        </button>
      }
    </div>


  );
};









