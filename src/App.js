import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Netflix from './pages/Netflix';
import Login  from './pages/Login';
import  Signup  from './pages/Signup';
import Players from './pages/Players';
import TvShow from './pages/TvShow';
import Movie from './pages/Movie';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/player' element={<Players/>}/>
        <Route path='/tv' element={<TvShow/>}/>
        <Route path='/movie' element={<Movie/>}/>
        <Route path='/' element={<Netflix/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
