import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/global.css'
import Header from './components/Header'
import Hero from './components/Hero'
import PillarsBar from './components/PillarsBar'
import MissionVision from './components/MissionVision'
import DevelopmentModel from './components/DevelopmentModel'
import VerticalsOverview from './components/VerticalsOverview'
import UKSCSection from './components/UKSCSection'
import AJSDPSection from './components/AJSDPSection'
import AcademySection from './components/AcademySection'
import ConsultingSection from './components/ConsultingSection'
import LeadershipSection from './components/LeadershipSection'
import ContactCTA from './components/ContactCTA'
import Footer from './components/Footer'

// Page imports
import UKSCPage from './pages/UKSCPage'
import AcademyPage from './pages/AcademyPage'
import AJSDPPage from './pages/AJSDPPage'

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <PillarsBar />
      <MissionVision />
      <DevelopmentModel />
      <VerticalsOverview />
      <ConsultingSection />
      <LeadershipSection />
      <ContactCTA />
      <Footer />
    </>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/uksc" element={<UKSCPage />} />
        <Route path="/academy" element={<AcademyPage />} />
        <Route path="/ajsdp" element={<AJSDPPage />} />
      </Routes>
    </Router>
  )
}

export default App
