import './App.css';
import Home from './pages/Home.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
      </Routes>
    </Router>
    </>
  )
}

