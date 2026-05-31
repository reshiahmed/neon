import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import Quote from './pages/Quote'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/hizmetler" element={<Services />} />
        <Route path="/hizmetler/:slug" element={<ServiceDetail />} />
        <Route path="/referanslar" element={<Portfolio />} />
        <Route path="/kurumsal" element={<About />} />
        <Route path="/sss" element={<FAQ />} />
        <Route path="/iletisim" element={<Contact />} />
        <Route path="/teklif" element={<Quote />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
