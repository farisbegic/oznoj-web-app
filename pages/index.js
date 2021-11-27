import Header from "../components/partials/Header";
import Hero from "../components/Home/Hero";
import Services from "../components/Home/Services";
import Join from "../components/Home/Join";
export default function Home() {
  return (
      <div>
        <Header />
          <Hero />
          <Services />
          <Join />
      </div>
  )
}
