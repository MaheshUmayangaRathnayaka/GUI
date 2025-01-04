import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navigation/Navbar';
import Hero from './Components/Hero/Hero';
import Features from './Components/Features/Features';
import PopularVehicles from './Components/PopularVehicles/PopularVehicles';
import Testimonial from './Components/Testimonial/Testimonial';
import HowItWorks from './Components/HowItWorks/HowItWorks';
import PricingPlan from './Components/PricingPlan/PricingPlan';
import FAQs from './Components/FAQs/FAQs';
import Newsletter from './Components/Newsletter/Newsletter';
import Footer from './Components/Footer/Footer';
import LoginPage from './Components/LoginPage/LoginPage';
import SignupPage from './Components/SignupPage/SignupPage';
import AboutPage from './Components/AboutPage/AboutPage';
import VehiclesPage from './Components/VehiclesPage/VehiclesPage';
import PricingPage from './Components/PricingPage/PricingPage';
import ContactPage from './Components/ContactPage/ContactPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Features />
              <PopularVehicles />
              <Testimonial />
              <HowItWorks />
              <PricingPlan />
              <FAQs />
              <Newsletter />
              <Footer />
            </>
          }
        />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/vehicles" element={<VehiclesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default App;
