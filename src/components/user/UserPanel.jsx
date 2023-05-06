import { useState } from "react";
import { Login, Register } from "../../auth/components";



export const UserPanel = ({rightPanel, setRightPanel}) => {

  const [showLogin, setShowLogin] = useState(true);

  const handleToggle = () => {
    setShowLogin(!showLogin);
  };


    return (

        <div className="absolute z-1k1 top-0 right-0 z-10">
        {rightPanel && 
          <div className="h-full">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded mb-4 mx-2.5 my-2.5"
              onClick={() => setRightPanel(false)}
            >
              Ocultar panel derecho
            </button>
           {showLogin ? (
            <Login handleToggle={handleToggle} />
          ) : (
            <Register handleToggle={handleToggle} />
          )}
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
