import "./App.css";
import Home from "./pages";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SigninPage from "./pages/signin";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
