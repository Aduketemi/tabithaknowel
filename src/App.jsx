import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home"
import { Landing } from "./components/pages/Landing";
import { Admissions } from "./components/pages/Admissions";
import { Preparation } from "./components/pages/Preparation";
import { Travel } from "./components/pages/Travel";
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
        <Route path="/" element={<Home />} >
          <Route path="" element={<Landing/>} />
          <Route path="admissions" element={<Admissions/>} />
          <Route path="test-preparation" element={<Preparation/>} />
          <Route path="travel-support" element={<Travel/>} />
        </Route>
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
