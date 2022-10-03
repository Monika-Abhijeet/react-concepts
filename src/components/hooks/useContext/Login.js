import { useContext } from "react";
import { AppContext } from "./useContext";

function Login() {
  const { setUserName } = useContext(AppContext);
  return (
    <div>
      <input
        type="text"
        placeholder="enter username"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
    </div>
  );
}

export default Login;
