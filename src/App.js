import Header from "./Components/Header";
import Card from "./Components/Card";
import Detail from "./Components/Detail";
// import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddMovie from "./Components/AddMovie";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="addmovie" element={<AddMovie />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
