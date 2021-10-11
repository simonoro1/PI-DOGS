import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import  Home  from "./home/Home";
import Landing from "./components/Landing/Landing";
import Create from "./components/Create/Create";

const App = () => {
  return (
    <Router>
      <Switch> 
      <Route path='/create' exact>
            <Create/>
        </Route>
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