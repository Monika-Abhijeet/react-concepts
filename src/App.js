import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hook from "./components/hooks/Hooks";
import Header from "./components/header/header";
import Counter from "./components/header/counter/counter";
import SignIn from "./components/forms/signin/signin";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hook />}></Route>
          <Route path="/counter" element={<Counter />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
