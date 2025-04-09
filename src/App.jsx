import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home"

function App() {

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
