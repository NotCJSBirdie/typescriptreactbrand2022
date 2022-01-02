import Header from "./components/Header";
import Hero from "./components/Hero";
import Section1 from "./components/Section1";
import FeatureA from "./components/FeatureA";
import FeatureB from "./components/FeatureB";
import FeatureC from "./components/FeatureC";
import Newsletter from "./components/Newsletter";
import Insta from "./components/Insta";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="overflow-hidden">
      <Header />
      <Hero />
      <Section1 />
      <FeatureA />
      <FeatureB />
      <FeatureC />
      <Newsletter />
      <Insta />
      <Footer />
    </div>
  );
}

export default App;
