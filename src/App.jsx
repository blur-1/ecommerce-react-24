import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Banner from './components/home/Banner'
import Categories from './components/home/Categories'
import Catalogue from './components/Catalogue';
import ShoppingCart from './components/ShoppingCart';
import Chatbot from './components/Chatbot'
import MapComponent from './components/maps/MapComponent';
import LoginForm from './components/login/LoginForm';
import RegisterForm from './components/login/RegisterForm';
import Profile from './components/login/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import Footer from './components/home/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<> <Banner /> {<Categories />} </>} />
        <Route path="/ecommerce-react-24" element={<> <Banner /> {<Categories />} </>} />
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/register" element={<RegisterForm/>} />
        <Route path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>} />
        <Route path="/products/category/:id" element={<Catalogue/>} />
        <Route path="/products" element={<Catalogue/>} />
        <Route path="/shopcart" element={<ShoppingCart />} />
        <Route path="/maps" element={<MapComponent/>} />
      </Routes>
      <Footer/>
      <Chatbot />
    </Router>
  );
};

export default App;