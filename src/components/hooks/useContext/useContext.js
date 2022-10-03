import { createContext, useState } from "react";
import Login from "./Login";
import User from "./User";

export const AppContext = createContext(null);

function ContextTutorial() {
  const [username, setUserName] = useState("");
  return (
    <div>
      <h2>Context Tutorial</h2>
      <AppContext.Provider value={{ username, setUserName }}>
        <Login />
        <User />
      </AppContext.Provider>
    </div>
  );
}

export default ContextTutorial;
