import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Tours from "./pages/tours/Tours";
import TourDetail from "./pages/tourDetail/TourDetail";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import SearchResultList from "./pages/searchResultList/SearchResultList";
import ThankYou from "./components/thank-you/ThankYou";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tours" element={<Tours/>}/>
        <Route path="/tours/search/" element={<SearchResultList/>}/>
        <Route path="/tours/:id" element={<TourDetail/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/thank-you" element={<ThankYou/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
