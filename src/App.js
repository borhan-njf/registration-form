import "./App.css";
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom/cjs/react-router-dom.min";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/signup" component={Signup}></Route>
        <Redirect from="/" to="/signup" />
      </Switch>
    </div>
  );
}

export default App;
