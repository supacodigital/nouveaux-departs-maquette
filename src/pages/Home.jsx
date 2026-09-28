import Header from '../components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx'
import Hero from '../sections/Hero/Hero.jsx'
import ForWhom from '../sections/ForWhom/ForWhom.jsx'
import Method from '../sections/Method/Method.jsx'
import Offers from '../sections/Offers/Offers.jsx'
import Program from '../sections/Program/Program.jsx'
import About from '../sections/About/About.jsx'
import Testimonials from '../sections/Testimonials/Testimonials.jsx'
import Faq from '../sections/Faq/Faq.jsx'
import FinalCta from '../sections/FinalCta/FinalCta.jsx'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ForWhom />
        <Method />
        <Offers />
        <Program />
        <About />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
