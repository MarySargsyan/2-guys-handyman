import './App.css';
import InfoDiv from './components/infoDiv';
import AppHeader from "./components/header";
import ServicesDiv from "./components/ServicesDiv";
import Footer from "./components/Footer";
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div className="App">
      <AppHeader/>
      <InfoDiv/>
      <ServicesDiv/>
      <AboutUs/>
      <Footer/>
    </div>
  );
}

export default App;
