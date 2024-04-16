import FAQ from "./components/FAQ";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Services />
      <FAQ />
    </div>
  );
}

export default App;
