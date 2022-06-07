import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { IntroSectionContainer } from "./components/introSectionContainer/IntroSectionContainer";
import "./css/App.css";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={"/intro-section"} element={<IntroSectionContainer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
