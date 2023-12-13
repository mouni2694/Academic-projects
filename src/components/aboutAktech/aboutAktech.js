import React from "react";
import "./aboutAktech.css";
import academicProjectsImage from "./images/academicProjectsImage.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";

function AboutAktech() {
    return (
      <div>
        <h1><span className = "title">About AKTech</span> Academic Projects</h1>
        <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
      <img src={academicProjectsImage} alt="img" className="img-fluid" />
        <p>The intention of Academic Projects is to enable students implement the
          theoretical concepts they learnt in classroom into real world
          applications.</p>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <p>The Indian economy is facing a huge demand for manpower
                resources that possess sound knowledge of basic IT skills or are
                equipped with specialized talent in areas such as finance and
                accounting, infrastructure management, web content development,
                enterprise resource planning and business intelligence.
              
              </p>
              <p className="info">
                For students pursuing non-engineering streams such as Bachelor
                of Science (B.Sc.), Bachelor of Computer Applications (BCA),
                Master of Science (M.Sc.) and so, ElysiumPro has customized
                academic projects that could be your gateway into the IT world.
              </p>
              <p className="info">
                Academic Projects intend to enable students to implement the
                theoretical concepts they learnt in the classroom into
                real-world applications. Moreover, this practical knowledge
                might come in handy during job interviews and have a lasting
                impact on students careers in the corporate world.
              </p>
              <p className="info">
                What makes our project center process is that we regularly begin
                working on a project, we obtain the design files. At the same
                time we set a priority on the quality order of the project flow.
                To achieve it we provide more prominence on proper testing of
                your project.
              </p>

      </div>
    </div>
  </div>
</div>
      </div>
    );
  }
  
  export default AboutAktech;
  