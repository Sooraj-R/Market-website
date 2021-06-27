import logo from './logo.svg';
import './App.css';
import Parallax from './Component/ParallaxZoom';
import ParallaxBanner from './Component/ParallaxBanner'
import { Portfolio } from './Component/Portfolio/Portfolio';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <ParallaxBanner/>
      <Parallax/>
      <Portfolio/>
      <Footer/>
      
    </div>
  );
}

export default App;
