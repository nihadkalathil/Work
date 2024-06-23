import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Layout from "./Pages/Layout";
import NoPage from "./Pages/NoPage";
import Register from "./Pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;