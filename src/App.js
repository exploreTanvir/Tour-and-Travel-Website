import {
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import About from './components/pages/about/About';
import Contact from './components/pages/contact/Contact';
import Home from "./components/pages/home/Home";
import Service from './components/pages/service/Service';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
         <About/>
          </Route>
          <Route path="/service">
         <Service/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
