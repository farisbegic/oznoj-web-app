import Header from "../components/partials/Header";
import Hero from "../components/Home/Hero";
import Services from "../components/Home/Services";
import Join from "../components/Home/Join";
import Footer from "../components/partials/Footer";
export default function Home() {
  return (
      <>
        <Header />
          <Hero />
          <Services />
          <Join />
          <Footer />
      </>
  )
}
