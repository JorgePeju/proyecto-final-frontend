
export const FilterPanel = ({leftPanel,setLeftPanel }) => {

  return (

    <div className="absolute z-1k1 left-0 z-10">
    {leftPanel && 
      <div className="h-screen w bg-teal-700 p-4 md:w-80">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
          onClick={() => setLeftPanel(false)}
        >
          Ocultar panel izquierdo
        </button>
        <div>
        
        </div>
      </div>
    }

    {!leftPanel && 
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mx-2.5 my-2.5"
        onClick={() => setLeftPanel(true)}
      >
        Mostrar panel izquierdo
      </button>
    }
  </div>
);
};









