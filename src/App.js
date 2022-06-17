import logo from './logo.svg';
import {Navbar} from './components/Navbar';
import {Footer} from './components/Footer';
import {Products} from './components/Products'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Products />
      <Footer />
    </div>

  );
}

export default App;
