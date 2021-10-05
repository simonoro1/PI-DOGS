import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import  Home  from "./home/Home";
// import Landing from "./components/Landing/Landing";

const App = () => {
  return (
    <Router>
      <Switch> 
        <Route path='/' exact>
            <Home/>
        </Route>
      </Switch>
    </Router> 
  )
};

export default App;