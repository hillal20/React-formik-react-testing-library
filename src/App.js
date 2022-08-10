import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./components/componentForTesting/mainPage/mainPage";
import SecondPage from "./components/componentForTesting/secondPage/secondPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route exact path="/secondPage" element={<SecondPage />} />
      </Routes>
    </Router>
  );
}

export default App;
