import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/navigation/Navigation.jsx";
import About from "./components/about/About";
import Border from "./components/border/Border";

function App() {
  return (
    <div className="app">
      <header className="app-header">{/* <Navigation /> */}</header>
      <About />
      <Border />
    </div>
  );
}

export default App;
