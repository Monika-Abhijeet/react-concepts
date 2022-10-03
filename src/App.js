import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hook from "./components/hooks/Hooks";
import Header from "./components/header/header";
import Counter from "./components/header/counter/counter";
import SignIn from "./components/forms/signin/signin";
import SignUp from "./components/forms/signin/signup/signup";
import ParentHOC from "./components/hoc/parentHOC";
import ReduxDemo from "./components/redux/reduxDemo";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>

        <Routes>
          <Route path="/" element={<SignUp />}></Route>

          <Route path="/hooks" element={<Hook />}></Route>
          <Route path="/counter" element={<Counter />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/hoc" element={<ParentHOC />}></Route>
          <Route path="/redux" element={<ReduxDemo />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
