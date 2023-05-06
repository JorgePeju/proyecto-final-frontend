


export const UserPanel = ({rightPanelVisible, setRightPanelVisible}) => {


    return (


        <div className="absolute z-1k1 top-0 right-0 z-10">
        {rightPanelVisible && (
          <div className="bg-emerald-500 p-4 ">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded mb-4 "
              onClick={() => setRightPanelVisible(false)}
            >
              Ocultar panel derecho
            </button>
            <div>
              <p>Cositas</p>
            </div>
          </div>
        )}
  
        {!rightPanelVisible && (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mx-2.5 my-2.5"
            onClick={() => setRightPanelVisible(true)}
          >
            Mostrar panel derecho
          </button>
        )}
      </div>
    );
  };
