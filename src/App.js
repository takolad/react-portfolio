import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";
import Detail from "./pages/Detail";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/react-portfolio/" component={Portfolio} />
          <Route exact path="/react-portfolio/:id" component={Detail} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
