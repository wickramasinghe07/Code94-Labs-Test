import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Pagenotfound from "./pages/Pagenotfound";
import AddRecipes from "./pages/AddRecipes";
import Edit from "./pages/Edit";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/add" element={<AddRecipes/>}/>
          <Route path="*" element={<Pagenotfound />} />
          <Route path="/edit/:id" element={<Edit/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
