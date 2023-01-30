import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Formation } from "./components/Pages/Formation";
import { Contact } from "./components/Pages/Contact";
import { Competence } from "./components/Pages/Competence";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/formation" component={Formation} />
            <Route path="/contact" component={Contact} />
            <Route path="/competence" component={Competence} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
