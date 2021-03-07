import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./header";
import saved from "./saved";
import search from "./search";


function App() {
  return (
    <div className="App">
      
        <Router>
            <Header/>
            <Route exact path = "/" component = {search}/>
            <Route exact path = "/saved" component = {saved}/>
            
        </Router>
       
    </div>
  );
}

export default App;
