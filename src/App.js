import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Body from './components/Body';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MovieContext } from './contexts/MovieContext';
import { useState, useEffect } from 'react';

function App() {
  const [ query, setQuery ] = useState("ant man")


  useEffect(() => {
    setQuery(query)
  }, [query])

  return (
    // TODO 
      <div className="App">
        <MovieContext.Provider value={[ query, setQuery ]}>
          <Header />
            <Body query={query}/>
        </MovieContext.Provider>
        <Footer />
      </div>
    
  );
}

export default App;
