import IndexPage from "./components/IndexPage"
import SignUpFormPage from "./components/SignUpForm";
import LoginFormPage from "./components/LoginForm";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={IndexPage}></Route>
        <Route path="/signup" component={SignUpFormPage}></Route>
        <Route path="/login" component={LoginFormPage}></Route>
      </Switch>   
    </>
  );
}

export default App;
