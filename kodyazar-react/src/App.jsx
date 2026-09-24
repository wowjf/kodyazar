import BackgroundEffects from './components/BackgroundEffects';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Goals from './components/Goals';
import Activities from './components/Activities';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BackgroundEffects />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Goals />
        <Activities />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

export default App;
