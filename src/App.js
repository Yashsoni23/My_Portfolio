import React from "react";
import LandingPage from "./components/pages/LandingPage";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function App() {
  return (
  <LandingPage/>
  );
}

export default App;
