import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Work from './components/Work'
import Resume from './components/Resume'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='work' element={<Work />} />
          <Route path='contact' element={<Contact />} />
          <Route path='resume' element={<Resume/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
