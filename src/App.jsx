import { useRef } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./components/Home";
import { HeaderBackground } from "./styles/StyledComponent";
import WaveBackground from "./assets/headSection/wave.png";
import { NavBar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ErpSoftware } from "./components/ErpSoftware";
import { Modules } from "./components/ErpModules";
import { WhyErp } from "./components/WhyAcademicErp";
import { OurClient } from "./components/OurClient";
import { ContactUs } from "./components/ContactUs";
import { OurOffer } from "./components/OurOffer";
import { BestSuited } from "./components/BestSuited";
import { Partner } from "./components/Partners";
import { Demo } from "./components/RequestDemo";
import { AboutUs } from "./components/AboutUs";
import { Career } from "./components/career/Career";
import { CareerDetail } from "./components/career/CareerDetail";
import { UserProvider } from "./components/data/Store";

const useScroll = () => {
  const elRef = useRef(null);
  const executeScroll = () =>
    elRef?.current?.scrollIntoView({
      behavior: "smooth",
      scrollIntoViewOptions: { block: "top", inline: "top" },
    });

  return [executeScroll, elRef];
};

function App() {
  const [elRef] = useScroll();
  const location = useLocation();
  const height = () => {
    if (
      location.pathname === "/partner" ||
      location.pathname === "/" ||
      location.pathname === "/modules" ||
      location.pathname === "/our-client"
    ) {
      return "90%";
    }
  };

  return (
    <div className="App">
      <UserProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home elRef={elRef} />} />
          <Route
            path="/automate-school-management-through-academic-erp-software"
            element={<ErpSoftware />}
          />
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/modules" element={<Modules />} />
          <Route path="/dynamic-academic-erp-modules" element={<Modules />} />
          <Route
            path="/why-dynamic-academic-erp-for-your-nstitution"
            element={<WhyErp />}
          />
          <Route path="/our-client" element={<OurClient />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/our-offer" element={<OurOffer />} />
          <Route
            path="/dynamic-academic-erp-best-suited-for"
            element={<BestSuited />}
          />
          <Route path="/partner" element={<Partner />} />
          <Route path="/request-a-demo" element={<Demo />} />
          <Route path="/career" element={<Career />} />
          <Route path="/career/:position" element={<CareerDetail />} />
          <Route path="/career/:position/apply" element={<CareerDetail />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
        <HeaderBackground className="d-none d-lg-flex" minHeight={height()}>
          <img src={WaveBackground} alt="" height="100%" width="67%" />
        </HeaderBackground>
        <Footer />
      </UserProvider>
    </div>
  );
}

export default App;
