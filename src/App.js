import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Body from './components/Body';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MovieProvider, MovieContext, query } from './contexts/MovieContext';
import { useContext, useEffect } from 'react';

function App() {
  const { query, setQuery } = useContext(MovieContext)
  console.log(query)

  useEffect(() => {
    setQuery(query)
  }, [query])

  return (
    // TODO 
    <div className="App">
      <MovieProvider>
        <Header />
        <Body query={query} />
      </MovieProvider>
      <Footer />
    </div>
  );
}

export default App;
