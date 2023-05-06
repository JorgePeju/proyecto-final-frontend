import { useState } from "react";


export const FilterPanel = ({leftPanelVisible,setLeftPanelVisible }) => {

  
  return (

    <div className="absolute z-1k1 left-0 z-10">
    {leftPanelVisible && (
      <div className="h-screen w bg-teal-700 p-4 md:w-80">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
          onClick={() => setLeftPanelVisible(false)}
        >
          Ocultar panel izquierdo
        </button>
        <div>
          <p>COSITAS</p>
        </div>
      </div>
    )}

    {!leftPanelVisible && (
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setLeftPanelVisible(true)}
      >
        Mostrar panel izquierdo
      </button>
    )}
  </div>
);
};









