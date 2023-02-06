import IndexPage from "./components/IndexPage"
import SignUpFormPage from "./components/SignUpForm";
import LoginFormPage from "./components/LoginForm";
import NavBar from "./components/NavBar";
import { Switch, Route } from "react-router-dom";


function App() {
  return (
    <>
      <NavBar></NavBar>
      <Switch>
        <Route exact path="/" component={IndexPage}></Route>
        <Route path="/signup" component={SignUpFormPage}></Route>
        <Route path="/login" component={LoginFormPage}></Route>
      </Switch>   
    </>
  );
}

export default App;
