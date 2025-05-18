import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: false,  
      easing: 'ease' 
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/auth/*" element={<AuthRoutes />} />
        <Route path="/" element={<AppHome/>}>
          <Route path="dashboard" element={<HomeDashboard />} />
          <Route path="dietaryplanner" element={<DietaryPlannerPage />} />
          <Route path="moodtracker" element={<MoodTrackerPage />} />
        </Route> */}
      </Routes>
    </Router>
  )
}

export default App
