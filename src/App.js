import "./App.css";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Work from "./components/Work";
import Overview from "./components/Overview";

function App() {
  return (
    <div className="App">
      <Contact />
      <Overview />
      <Education />
      <Work />
    </div>
  );
}

export default App;
