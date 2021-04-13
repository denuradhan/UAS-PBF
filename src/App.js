import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header handleClick={handleClick}/>
      <Body rename={rename}/>
      <Footer/>
    </div>
  );
}
function handleClick() {
  var x = document.getElementById("inputSearch").value
  if(x != null){
      console.log(x)
      rename(x)
  }
}

function rename(string){
  document.getElementById("demo").innerHTML = string
}

export default App;
