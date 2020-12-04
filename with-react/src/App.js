import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Header from './components/Header'
import Slider from './components/Slider'
import News from './components/News'
import About from './components/About'
import Faq from './components/Faq'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
        <Header/>
        <Slider/>
        <News/>
        <About  />
        <Faq/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App;
