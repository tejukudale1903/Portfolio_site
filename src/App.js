
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import MainPage from "./Components/MainPage/MainPage";
import Contact from "./Components/Contact/Contact";
// import { useMediaQuery } from 'react-responsive';


// const Example = () => {
//   const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 })
//   const isBigScreen = useMediaQuery({ minWidth: 1824 })
//   const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
//   const isPortrait = useMediaQuery({ orientation: 'portrait' })
//   const isRetina = useMediaQuery({ minResolution: '2dppx' })


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
