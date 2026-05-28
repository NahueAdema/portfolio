import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Focus from "./components/Focus";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main className="">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Focus />
        <Contact />
        <ScrollToTop />
      </main>
      <Footer />
    </>
  );
}

export default App;
