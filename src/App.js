import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Body from './components/Body';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MovieContext } from './contexts/MovieContext';
import { useState, useEffect } from 'react';

function App() {
  const [ linkAPI, setLinkAPI] = useState("https://api.themoviedb.org/3/trending/all/week?api_key=1304eb73177f6db734ad08f218c547c0")

  return (
    // TODO 
      <div className="App">
        <MovieContext.Provider value={[linkAPI, setLinkAPI]}>
          <Header />
          <Body/>
        </MovieContext.Provider>
        <Footer />
      </div>
    
  );
}

export default App;
