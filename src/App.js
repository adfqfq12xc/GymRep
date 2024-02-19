import './App.css';
import Hero from './Components/hero/Hero';
import Programs from './Components/programs/programs';
import Reason from './Components/reason/reason';
import Plans from './Components/plans/plans';
import Testim from './Components/testimonials/testim';
import Join from './Components/join/join';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Hero/>
      <Programs/>
      <Reason/>
      <Plans/>
      <Testim/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;
