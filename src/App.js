import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MovieDetails from './components/MovieDetails/MovieDetails';
import PageNotFound from './components/404/404';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/movie/:omdbID" element={<MovieDetails />} />
          <Route element={PageNotFound} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
