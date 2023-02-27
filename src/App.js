import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import "./styles/main.scss"
import "./fonts/LambencyRegular.ttf";
import Home from './pages/home';
import Details from "./pages/details";
import Gifts from './pages/gifts';
import NoMatch from "./pages/no-match";
import Story from "./pages/story";


function App() {
  return (
    <div className="App">
        <Router>
          <div className='routes'>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/details' element={<Details/>} />
              <Route path='/gifts' element={<Gifts/>} />
              <Route path='/story' element={<Story/>} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </div>
        </Router>
    </div>
  );
}

export default App;
