import { useState } from 'react'
import Header from '../src/components/body/Header'
import Footer from '../src/components/body/Footer'
import Conteudo from './components/body'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Conteudo/>
      <Footer/>
    </>
  )
}

export default App
