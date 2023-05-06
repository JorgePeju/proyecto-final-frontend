


export const UserPanel = ({rightPanel, setRightPanel}) => {

    return (

        <div className="absolute z-1k1 top-0 right-0 z-10">
        {rightPanel && 
          <div className="bg-emerald-500 p-4 ">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded mb-4 "
              onClick={() => setRightPanel(false)}
            >
              Ocultar panel derecho
            </button>
            <div>
              <p>Cositas</p>
            </div>
          </div>
        }
  
        {!rightPanel && 
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mx-2.5 my-2.5"
            onClick={() => setRightPanel(true)}
          >
            Mostrar panel derecho
          </button>
        }
      </div>
    );
  };
