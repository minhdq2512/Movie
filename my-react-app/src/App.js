import './App.css';
import Footer from './Components/Footer';
import Navigation from './Components/Navigation';
import FlimsMap from './Components/FlimsMap';

function App() {
  return (
    <div className="App">
      <Navigation>
        </Navigation> 
        <FlimsMap/>
        <Footer></Footer>
    </div>
  );
}

export default App;