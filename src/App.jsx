import { useState } from 'react'
import './App.css'
import Great from './components/Great'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import WelcomeMessage from './components/WelcomeMessage'
import JsxRules from './components/JsxRules'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <MainContent/>
      <WelcomeMessage/>
      <JsxRules/>
      <Footer/>
    </>
  )
}

export default App
