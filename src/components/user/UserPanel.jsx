import { useContext, useState } from "react";
import { Login, Register } from "../auth";
import { UserContext } from "../../context";
import { LoggedUser } from './'

export const UserPanel = ({ rightPanel, setRightPanel }) => {

  const [showLogin, setShowLogin] = useState(true);
  const { user } = useContext(UserContext);

  const handleToggle = () => {
    setShowLogin(!showLogin);
  };

  return (

    <div className="absolute z-1k1 right-0 ">
      {rightPanel &&
        <div className="flex">
          <div className="flex items-center">
            <button
               className="bg-zbgcosa text-white px-2 py-8 rounded mb-boton"
              onClick={() => setRightPanel(false)}
            >
              x
            </button>
          </div>
          <div className="h-screen">
            <div>
              {!user && (showLogin ?
                <Login handleToggle={handleToggle} />
                :
                <Register handleToggle={handleToggle} />
              )} 
              {user && 
              <LoggedUser/>}
            </div>
          </div>

        </div>
      }

      {!rightPanel &&
        <button
          className="bg-zbgcosa text-white px-4 py-2 rounded mx-2.5 my-2.5"
          onClick={() => setRightPanel(true)}
        >
          Abrir
        </button>
      }
    </div>
  );
};

