import styles from "./style";
import {
  Business,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
  OurDoctor,
  Headline,
} from "./components";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <Headline />

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Clients />
          <Business />
          <Stats />
          <OurDoctor />
          <Testimonials />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
