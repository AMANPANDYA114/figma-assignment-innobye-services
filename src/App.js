// import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { Secondrow } from './Components/Secondrow';
import Hero from './Components/Hero';
import Thirdrow from './Components/Thirdrow';
import Lastcard from './Components/Lastcard';
import Subscribe from './Components/Subscribe';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
    <Navbar />
    <Secondrow />
    <Hero />
    <Thirdrow />
  <Lastcard/>
  <Subscribe/>
  <Footer/>
    </div>
  );
}

export default App;
