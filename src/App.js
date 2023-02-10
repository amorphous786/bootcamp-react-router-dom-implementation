import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
function App() {
  return (
        <BrowserRouter>
          <div><Header></Header></div>
        <Routes>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
          </Routes>
        </BrowserRouter>
  );
}

export default App;
