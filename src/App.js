
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import MainPage from "./Components/MainPage/MainPage";
import Contact from "./Components/Contact/Contact";
// import { useMediaQuery } from 'react-responsive';

function App() {
  return (
    <div className="App">
     <Navbar />
     <MainPage />
     <Contact />
    </div>
  );
}

export default App;
