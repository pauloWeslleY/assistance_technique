import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { NavBar } from '../components/NavBar'
import { Navigation } from '../components/Navigation'

export const AppRoute = () => {
  return (
    <Router>
      <NavBar />
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}
