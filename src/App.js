import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import Body from "./components/Body";

import Header from "./components/header";
import Information from "./components/information";
import Footer from "./components/footer";
import AddItemPage from "./components/AddItemPage";
import Home from "./components/Home";
// import addItemPage from "./components/AddItemPage";

function App() {
  return (
    <div className="App">
      {/* <Header />
      <Body />
      <div className="border-orange w-250"></div>
      <Information />
      <Footer />
      <AddItemPage /> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addItemPage" element={<AddItemPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
