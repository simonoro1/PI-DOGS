import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import  Home  from "./home/Home";
import Landing from "./components/Landing/Landing";

const App = () => {
  return (
    <Router>
      <Switch> 
        <Route path='/home' exact>
            <Home/>
        </Route>
        <Route path='/' exact>
            <Landing/>
        </Route>
      </Switch>
    </Router> 
  )
};

export default App;