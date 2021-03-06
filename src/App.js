import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MovieDetails from './components/Movies/MovieDetails/MovieDetails';
import PageNotFound from './components/404/404';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/movie/:imdbID" element={<MovieDetails />} />
            <Route element={PageNotFound} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
