import IndexPage from "./components/IndexPage"
import SignUpFormPage from "./components/SignUpForm";
import LoginFormPage from "./components/LoginForm";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route exact path="/" element={<IndexPage />}></Route>
        <Route path="/signup" element={<SignUpFormPage/>}></Route>
        <Route path="/login" element={<LoginFormPage/>}></Route>
      </Routes>   
    </>
  );
}

export default App;
