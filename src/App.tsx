import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollManager from './components/ScrollManager'
import About from './pages/About'
import Contact from './pages/Contact'
import Donate from './pages/Donate'
import Gallery from './pages/Gallery'
import Home from './pages/Home'
import LandingReplica from './pages/LandingReplica'
import NewsEvents from './pages/NewsEvents'
import NotFound from './pages/NotFound'
import Programs from './pages/Programs'
import Registration from './pages/Registration'
import Subscribe from './pages/Subscribe'
import Sponsors from './pages/Sponsors'
import Team from './pages/Team'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Routes>
        <Route path="/event-2026" element={<LandingReplica />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/partner-with-us" element={<Registration />} />
          <Route path="/events" element={<NewsEvents />} />
          <Route path="/partners" element={<Sponsors />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/news-events" element={<NewsEvents />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
