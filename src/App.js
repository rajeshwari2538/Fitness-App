import FAQ from "./components/FAQ";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Services />
      <FAQ />
      <Testimonials />
    </div>
  );
}

export default App;
