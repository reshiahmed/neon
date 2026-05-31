import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import WhatsAppFloat from './WhatsAppFloat'
import MobileCTABar from './MobileCTABar'
import ScrollToTop from './ScrollToTop'

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="min-h-screen pb-14 md:pb-0">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
      <MobileCTABar />
    </>
  )
}
