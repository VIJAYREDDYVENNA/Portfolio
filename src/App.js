import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import { initEmailJS } from './emailService.js';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    const speakAfterVoicesLoaded = () => {
      const msg = new SpeechSynthesisUtterance("Hi, I'm Vijay – nice to meet you.");
      msg.lang = "en-US";
      msg.pitch = 1;
      msg.rate = 1;
      msg.volume = 1;

      const voices = window.speechSynthesis.getVoices();
      msg.voice = voices.find(voice => voice.lang === 'en-US') || voices[0];

      // ✅ Now speak
      window.speechSynthesis.cancel(); // clear previous
      window.speechSynthesis.speak(msg);
    };

    // 🧠 Load voices properly
    if (window.speechSynthesis.getVoices().length === 0) {
      window.speechSynthesis.onvoiceschanged = () => {
        speakAfterVoicesLoaded();
      };
    } else {
      // Voices are ready
      speakAfterVoicesLoaded();
    }
  }, []);
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/profile" element={<Profile />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;


// Initialize EmailJS
// initEmailJS();