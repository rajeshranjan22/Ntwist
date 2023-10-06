import "./App.css";
import Navbar from "./components/navbar";
import { useEffect, useState } from "react";
import AnimateIn from "./utils/AnimateIn";
import Loader from "./components/loader";

//Importing images
import background from "./assets/bg.png";
import firstImg from "./assets/home-1.png";
import Industries from "./components/industries";

//Dataset for Industries description on Homepage
import { industries_description } from "./utils/industries_description";
import Footer from "./components/footer";
import NavbarModal from "./components/navbarModal";

function App() {
  const [isScrolled, changeIsScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  const changeNavBgColor = () => {
    if (window.scrollY > 30) changeIsScrolled(true);
    else changeIsScrolled(false);
  };

  const handleClick = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    setTimeout(() => setShowLoader(false), 2000);
    window.addEventListener("scroll", changeNavBgColor);
    return () => {
      window.removeEventListener("scroll", changeNavBgColor);
    };
  }, []);

  return showLoader ? (
    <Loader />
  ) : (
    <div className="App">
      <Navbar isScrolled={isScrolled} handleClick={handleClick} />
      <div
        className="home"
        //Adding background Image to the page
        style={{
          backgroundImage: `url(${background})`,
          height: "100vh",
          width: "100vw",
          backgroundSize: "cover",
        }}
      >
        {/* MODAL NAVBAR FOR SMALLER SCREENS */}
        {showModal ? <NavbarModal /> : null}

        {/* Landing Page */}
        <div className="first-page">
          <div>
            <h1 className="first-text">Data-powered solutions</h1>
            <h1 className="first-text">for Industrial Excellence</h1>
            <a href="https://ntwist.com/mine-to-mill-to-mine-optimization/">
              <button className="read-more">Read More</button>
            </a>
          </div>
          <img src={firstImg} alt="First Image" width="55%" />
        </div>
      </div>

      {/* Industries Description */}

      {industries_description.map((industry, count) => (
        <AnimateIn distance={100} triggerOnce={true} direction={"translateY"}>
          <Industries
            key={count}
            title={industry.title}
            desc={industry.description}
            img={industry.image}
            href={industry.href}
            isOdd={count % 2 == 0 ? false : true}
            isLast={count == industries_description.length - 1 ? true : false}
          />
        </AnimateIn>
      ))}

      <Footer />
    </div>
  );
}

export default App;
