import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { AppRouter } from "./components/Router/AppRouter";

function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
