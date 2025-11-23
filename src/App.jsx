import ClientSection from "./sections/ClientSection"
import Navigation from "./components/Navigation"
import PortfolioSection from "./sections/PortfolioSection"
import QualitiesCards from "./sections/QualitiesCards"
import ExperienceSection from "./sections/ExperienceSection"
import FloatingShapes from "./components/FloatingShapes"
import TechStack from "./sections/TechStack"
import TestimonialSection from "./sections/TestimonialSection"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"
import MainBanner from "./components/MainBanner"
import CoverflowSlider from "./components/CoverflowSlider"

const App = () => {
  return (
   <>
    <FloatingShapes />
    <Navigation />
    <MainBanner
      title="Hi, I’m Naeem Akhtar, I design and develop smooth, interactive, and visually engaging web experiences  
      "
      subtitle="From React and Next.js to GSAP, Three.js, WordPress & Webflow. I turn ideas into fast, responsive, and delightful digital products. Let’s create something exceptional together."
      primaryColor="#77a6ff"    
      shardColor="#FFD166"      
      bgColor="#071022" 
    />
    <PortfolioSection />
    <CoverflowSlider />
    <ClientSection />
    <QualitiesCards />
    <ExperienceSection />
    <TechStack />
    <TestimonialSection />
    <Contact />
    <Footer />
   </>
  )
}

export default App