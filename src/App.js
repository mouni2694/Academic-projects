import BannerComponent from "./components/bannerComponent/banner"
import ProjectTitle from "./components/projectTitle/projectTitle"
import OurProcess from "./components/ourProcess/ourProcess"
import AcademicProjects from "./components/academicProjects/academicProjects"
import OpeningHours from "./components/openingHours/openingHours"
import AboutAktech from "./components/aboutAktech/aboutAktech"
import Domains from "./components/domains/domains"
import ProjectDisplay from "./components/projectDisplay/projectDisplay"

import './App.css';

function App() {
  return (
    <div className="container">
      <div className = "row">

        <BannerComponent/>
        <ProjectTitle/>
        <OurProcess/>
        <AcademicProjects/>
        <OpeningHours/>
        <AboutAktech/>
        <Domains/>
        <ProjectDisplay/>
        
      </div>
      
    </div>
  );
}

export default App;
