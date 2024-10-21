import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Profile from "./pages/Profile";
import WorkSpace from "./pages/WorkSpace";
import NotFound from "./pages/NotFound";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="text-white">
      <div>
        <BrowserRouter>
          <NavBar />
          <div className="container mx-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/workspace" element={<WorkSpace />} />
              <Route path="/contact" element={<Contacts />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Contact />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
