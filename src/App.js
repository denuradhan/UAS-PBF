import './App.css';
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import Body  from './components/Body'
import Detail  from './components/Detail'
import 'bootstrap/dist/css/bootstrap.min.css'
import { MovieContext } from './contexts/MovieContext'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  const [ linkAPI, setLinkAPI] = useState("https://api.themoviedb.org/3/trending/all/week?api_key=1304eb73177f6db734ad08f218c547c0")
  const [ movie, setMovie] = useState("00000")
  return (
      <Router>
        <div className="App">
          <MovieContext.Provider value={ {value:[linkAPI, setLinkAPI], value2:[movie, setMovie]} }>
            <Header />
            <Switch>
              <Route path="/" exact component={Body}/>
              <Route path="/detail" exact component={Detail}/>
            </Switch>
          </MovieContext.Provider>
          <Footer />
        </div>
      </Router>
  );
}
export default App;