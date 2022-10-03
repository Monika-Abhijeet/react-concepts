import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hook from "./components/hooks/Hooks";
import Header from "./components/header/header";
import Counter from "./components/header/counter/counter";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hook />}></Route>
          <Route path="/counter" element={<Counter />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
