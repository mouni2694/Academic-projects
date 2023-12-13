import React from "react";
import "./projectTitle.css"


import project from "./image/project.mp4"

function ProjectTitle(){
    return(
        <div class="container">
          
            <h1><span className = "heading">Project Title:</span> [Your Project Title]</h1>
            <video style = {{width:"100%"}} autoplay controls>
                <source src = {project} type = "video/mp4"/>
            </video>
        <div class="row">
    <div class="col">
      <h5 className = "heading">Introduction</h5>
      <p className = "paragraph">Introduce the background and context of the project.
      Clearly state the problem or challange your poject aims to address.</p>


    </div>
    <div class="col">
      <h5 className = "heading">Literature Review</h5>
      <p className = "paragraph">Review relevant literature and previous work related to your project.
      Highlight gaps in existing research that your project addresses.
      Provide a rationale for your project based on the literature.</p>
    </div>
    
  </div>
  <div class = "row">
    <div class = "col">
        <h5 className = "heading">Methodology</h5>
        <p className = "paragraph">Describe the research or development methodology employed.
        Specify the tools, technologies, and frameworks used in the project.
        Explain the process of data collection or system design.</p>

    </div>
    <div class = "col">
        <h5 className = "heading">System Design (if applicable):</h5>
        <p className = "paragraph">Provide an overview of the system architecture.
        Include UML diagrams, such as class diagrams, sequence diagrams, and use case diagrams,
             to illustrate the system structure and behavior.</p>
        

    </div>

  </div>

  <div class = "row">
    <div class = "col">
        <h5 className = "heading">Implementation</h5>
        <p className = "paragraph">Detail the steps taken to implement the project.
Include code snippets, algorithms, or pseudocode if applicable. Discuss any challenges faced during implementation and how they were addressed.</p>
        

    </div>
    <div class = "col">
        <h5 className = "heading">Results and Evaluation:</h5>
        <p className = "paragraph">Present the results of your project, including any data analysis or system performance metrics.
        Discuss the significance of your findings or the success of your system.
        If applicable, compare your results to existing literature or benchmarks.
        </p>
        

    </div>

  </div>


  <div class = "row">
    <div class = "col">
        <h5 className = "heading">Discussion</h5>
        <p className = "paragraph">Interpret the results and relate them to your project objectives.</p>
        

    </div>
    <div class = "col">
        <h5 className = "heading">Conclusion</h5>
        <p className = "paragraph">Summarize the key findings and contributions of your project.
        Restate the importance of your work and its potential impact.
        </p>
        

    </div>

  </div>


  <div class = "row">
    <div class = "col">
        <h5 className = "heading">Reference</h5>
        <p className = "paragraph">Cite all the sources, literature, and tools referenced in your documentation.</p>
        

    </div>
    <div class = "col">
        <h5 className = "heading">Acknowledgments (if applicable):</h5>
        <p className = "paragraph">Thank anyone who contributed to the project, including advisors, collaborators, or funding sources.</p>
        

    </div>

  </div>



  <div class = "row">
    
    <div class = "col">
        <h5 className = "heading">Appendices (if applicable):</h5>
        <p className = "paragraph">Include additional materials, such as detailed code, extra data, or supplementary information.</p>
        

    </div>

  </div>


</div>
        )

}
export default ProjectTitle;