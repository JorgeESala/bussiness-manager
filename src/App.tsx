import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Customers from "./components/Customers";
import MyNavbar from "./components/MyNavbar";
import Graphics from "./components/Graphics";
import Inventory from "./components/Inventory";
import Contact from "./components/Contact";
export default function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <div className="min-h-screen bg-gray-50 p-4 dark:bg-gray-900">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/graphics" element={<Graphics />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
